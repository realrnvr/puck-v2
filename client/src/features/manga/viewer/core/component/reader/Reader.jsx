import "./reader.css";

import { useChapterImages } from "../../../hooks/useChapterImages";
import { Range } from "react-range";
import { useLightBoxProps } from "../../../hooks/useLightBoxProps";

export default function Reader({ children }) {
  const images = useChapterImages();
  const { isRTL } = useLightBoxProps();

  return (
    <>
      {children}
      <div className="dummy__page-nav">
        <Range
          label="Select your value"
          rtl={isRTL}
          step={1}
          min={0}
          max={images.data.length - 1}
          values={[images.index]}
          onChange={(e) => images.setIndex(e[0])}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "15px",
                width: "100%",
                backgroundColor: "#fff",
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
                  height: "10px",
                  width: "5px",
                  backgroundColor: "red",
                }}
              ></div>
            );
          }}
        />
      </div>
    </>
  );
}
