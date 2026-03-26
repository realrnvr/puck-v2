import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Lightbox, { ImageSlide } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Counter from "yet-another-react-lightbox/plugins/counter";

// ─── Double Page Plugin ───────────────────────────────────────────────────────

function DoublePagePlugin({ augment }) {
  augment(({ render, ...restProps }) => ({
    ...restProps,
    render: {
      ...render,
      slide: ({ slide, offset, rect, imageFit, imageProps }) => {
        if (slide.type !== "double") return undefined; // fall through to default renderer

        return (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              backgroundColor: "#000",
            }}
          >
            <ImageSlide
              slide={slide.right}
              rect={rect}
              imageFit={imageFit}
              imageProps={imageProps}
              offset={offset}
              style={{ height: "100%", width: "50%", objectFit: "contain" }}
            />
            <ImageSlide
              slide={slide.left}
              rect={rect}
              imageFit={imageFit}
              imageProps={imageProps}
              offset={offset}
              style={{ height: "100%", width: "50%", objectFit: "contain" }}
            />
          </div>
        );
      },
    },
  }));
}

// ─── Wide Page Detection ──────────────────────────────────────────────────────

function isWideImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.naturalWidth > img.naturalHeight);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

// ─── Slide Pairing ────────────────────────────────────────────────────────────

function pairSlides(slides, widePages, isDoublePage) {
  if (!isDoublePage) return slides;

  const paired = [];
  let i = 0;

  // cover page always solo
  if (slides.length > 0) {
    paired.push(slides[0]);
    i = 1;
  }

  while (i < slides.length) {
    const current = slides[i];
    const next = slides[i + 1];

    // if current is wide — keep solo
    if (widePages.has(i)) {
      paired.push(current);
      i++;
      continue;
    }

    // if next exists and is not wide — pair them
    if (next && !widePages.has(i + 1)) {
      paired.push({
        type: "double",
        // RTL: current page on right, next page on left
        right: current,
        left: next,
      });
      i += 2;
      continue;
    }

    // otherwise solo
    paired.push(current);
    i++;
  }

  return paired;
}

// ─── Index Conversion ─────────────────────────────────────────────────────────

function toDoubleIndex(singleIndex, pairedSlides) {
  let singleCount = 0;
  for (let i = 0; i < pairedSlides.length; i++) {
    const slide = pairedSlides[i];
    if (slide.type === "double") {
      if (singleCount === singleIndex || singleCount + 1 === singleIndex) {
        return i;
      }
      singleCount += 2;
    } else {
      if (singleCount === singleIndex) return i;
      singleCount++;
    }
  }
  return 0;
}

function toSingleIndex(doubleIndex, pairedSlides) {
  let singleCount = 0;
  for (let i = 0; i < pairedSlides.length; i++) {
    if (i === doubleIndex) return singleCount;
    const slide = pairedSlides[i];
    singleCount += slide.type === "double" ? 2 : 1;
  }
  return 0;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Reproduce() {
  const [rawSlides, setRawSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [isDoublePage, setIsDoublePage] = useState(false);
  const [widePages, setWidePages] = useState(new Set());
  const [isRTL, setIsRTL] = useState(true);
  const deferredIndex = useDeferredValue(index);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=20",
        );
        const slides = response.data.map((img) => ({
          src: img.download_url,
        }));
        setRawSlides(slides);

        // detect wide pages in background — doesn't block render
        const wideSet = new Set();
        await Promise.all(
          slides.map(async (slide, i) => {
            const wide = await isWideImage(slide.src);
            if (wide) wideSet.add(i);
          }),
        );
        setWidePages(new Set(wideSet));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const pairedSlides = useMemo(
    () => pairSlides(rawSlides, widePages, isDoublePage),
    [rawSlides, widePages, isDoublePage],
  );

  // RTL: reverse paired slides + invert index — no CSS direction hacks
  const displaySlides = useMemo(
    () => (isRTL ? [...pairedSlides].reverse() : pairedSlides),
    [pairedSlides, isRTL],
  );

  const displayIndex = isRTL
    ? displaySlides.length - 1 - deferredIndex
    : deferredIndex;

  function handleToggleDoublePage() {
    setIsDoublePage((prev) => {
      const next = !prev;

      if (next) {
        // single → double: convert current index into paired index space
        const newPaired = pairSlides(rawSlides, widePages, true);
        setIndex(toDoubleIndex(index, newPaired));
      } else {
        // double → single: convert current paired index back to single index space
        setIndex(toSingleIndex(index, pairedSlides));
      }

      return next;
    });
  }

  function handleView({ index: currentIndex }) {
    const logicalIndex = isRTL
      ? displaySlides.length - 1 - currentIndex
      : currentIndex;
    setIndex(logicalIndex);
  }

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          color: "#fff",
          fontFamily: "monospace",
        }}
      >
        Loading chapter...
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "#111",
      }}
    >
      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "8px 12px",
          background: "#1a1a1a",
          borderBottom: "1px solid #333",
          alignItems: "center",
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <button
          onClick={handleToggleDoublePage}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: isDoublePage ? "#e05252" : "#2a2a2a",
            color: "#fff",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "monospace",
          }}
        >
          {isDoublePage ? "Double Page ✓" : "Double Page"}
        </button>

        <button
          onClick={() => setIsRTL((prev) => !prev)}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: isRTL ? "#e05252" : "#2a2a2a",
            color: "#fff",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "monospace",
          }}
        >
          {isRTL ? "RTL ✓" : "LTR"}
        </button>

        <span
          style={{
            marginLeft: "auto",
            color: "#888",
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        >
          {widePages.size > 0 && `${widePages.size} wide page(s) detected`}
        </span>
      </div>

      {/* Lightbox */}
      <div style={{ flex: 1, position: "relative" }}>
        <Lightbox
          index={displayIndex}
          slides={displaySlides}
          plugins={[Inline, Counter, DoublePagePlugin]}
          on={{ view: handleView }}
          carousel={{
            finite: true,
            preload: 2,
            padding: "0px",
            spacing: "0%",
          }}
          inline={{
            style: { width: "100%", height: "100%" },
          }}
        />
      </div>
    </div>
  );
}
