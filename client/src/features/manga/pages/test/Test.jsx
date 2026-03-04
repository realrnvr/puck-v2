import { useCallback, useEffect, useRef, useState } from "react";
import "./test.css";

const pages = [
  "/mock-1.jpg",
  "/mock-2.jpg",
  "/mock-3.jpg",
  "/mock-4.jpg",
  "/mock-5.jpg",
  "/mock-6.jpg",
];

export default function Test() {
  const containerRef = useRef(null);
  const targetPageRef = useRef(0);

  const [pageIndex, setPageIndex] = useState(0);

  const scrollToPage = (index) => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({
      left: el.clientWidth * index,
      behavior: "smooth",
    });
  };

  const nextPage = useCallback(() => {
    targetPageRef.current = Math.min(
      targetPageRef.current + 1,
      pages.length - 1,
    );

    setPageIndex(targetPageRef.current);
    scrollToPage(targetPageRef.current);
  }, []);

  const prevPage = useCallback(() => {
    targetPageRef.current = Math.max(targetPageRef.current - 1, 0);

    setPageIndex(targetPageRef.current);
    scrollToPage(targetPageRef.current);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.repeat) return;
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextPage, prevPage]);

  return (
    <div className="viewer">
      <div className="viewer__controls">
        <button onClick={prevPage} disabled={pageIndex === 0}>
          Prev
        </button>

        <span>
          {pageIndex + 1} / {pages.length}
        </span>

        <button onClick={nextPage} disabled={pageIndex === pages.length - 1}>
          Next
        </button>
      </div>

      <div ref={containerRef} className="viewer__viewport">
        <div className="viewer__strip">
          {pages.map((src, i) => (
            <div key={i} className="viewer__page">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
