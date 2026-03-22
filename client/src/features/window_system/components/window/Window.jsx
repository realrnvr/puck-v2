import "./window.css";

import { Rnd } from "react-rnd";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useWindowManager } from "../../hooks/useWindowManager";

import getCenteredPosition from "../../utils/helper";

export default function Window({
  children,
  defaultProps,
  style,
  state: { setDialog, dialog },
  id,
}) {
  const rndRef = useRef(null);
  const manager = useWindowManager();

  const [position, setPosition] = useState(() =>
    getCenteredPosition(defaultProps.width, defaultProps.height),
  );

  function handleFocus() {
    manager.bringToFrontById(id);
  }

  useEffect(() => {
    const instance = rndRef.current;
    if (!instance) {
      return;
    }

    manager.registerWindow(id, instance);

    return () => {
      manager.unregisterWindow(id, instance);
    };
  }, [manager, id]);

  useEffect(() => {
    function handleResize() {
      const maxX = window.innerWidth - defaultProps.width;
      const maxY = window.innerHeight - defaultProps.height;

      setPosition((prev) => {
        return {
          x: Math.min(Math.max(prev.x, 0), maxX),
          y: Math.min(Math.max(prev.y, 0), maxY),
        };
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultProps.width, defaultProps.height]);

  return createPortal(
    <div ref={rndRef} style={{ position: "relative" }}>
      {dialog && (
        <Rnd
          default={defaultProps}
          style={{
            ...style,
          }}
          position={position}
          size={{ width: defaultProps.width, height: defaultProps.height }}
          bounds="window"
          dragHandleClassName="window-header"
          enableResizing={false}
          onDragStart={() => handleFocus()}
          onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
        >
          <div className="window">
            <header className="window-header">
              <h3 className="window-title">{defaultProps.title}</h3>
              <button
                className="window-button"
                onClick={() => setDialog(false)}
              >
                {"[ x ]"}
              </button>
            </header>
            <div className="window-content">{children}</div>
          </div>
        </Rnd>
      )}
    </div>,
    document.body,
  );
}
