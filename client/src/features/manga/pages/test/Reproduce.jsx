import "yet-another-react-lightbox/styles.css";

import { useDeferredValue, useEffect, useState } from "react";
import { Range } from "react-range";

import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

export default function Reproduce() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const defferedIndex = useDeferredValue(index);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=50",
        );
        const slides = response.data.map((img) => {
          return { src: img.download_url };
        });
        setSlides(slides);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const slidesLength = slides.length - 1;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        gridTemplateRows: "7fr 1fr",
      }}
    >
      <div>
        <Lightbox
          slides={slides}
          index={defferedIndex}
          plugins={[Inline]}
          on={{
            view: ({ index: currentIndex }) => {
              setIndex(currentIndex);
            },
          }}
        />
      </div>
      <div style={{ marginTop: "1rem", width: "70%", marginInline: "auto" }}>
        {slides.length && (
          <Range
            label="Select your value"
            step={1}
            min={0}
            max={slidesLength}
            values={[index]}
            onChange={(e) => setIndex(e[0])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#000",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "15px",
                  width: "15px",
                  backgroundColor: "pink",
                  borderRadius: "20px",
                }}
              />
            )}
            renderMark={({ props }) => {
              return (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "5px",
                    backgroundColor: "red",
                  }}
                ></div>
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
