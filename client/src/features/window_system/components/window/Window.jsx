import "./window.css";

import { Rnd } from "react-rnd";
import { useWindowManager } from "../../hooks/useWindowManager";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Window({
  children,
  defaultProps,
  style,
  state: { setDialog },
}) {
  const manager = useWindowManager();

  function handleFocus(node) {
    manager.bringToFront(node);
  }

  function getCenteredPosition(width, height) {
    const x = window.innerWidth / 2 - width / 2;
    const y = window.innerHeight / 2 - height / 2;

    return { x, y };
  }

  const { x, y } = getCenteredPosition(defaultProps.width, defaultProps.height);

  useEffect(() => {
    manager.registerWindow();

    return () => {
      manager.unregisterWindow();
    };
  }, [manager]);

  return createPortal(
    <Rnd
      default={{ ...defaultProps, x, y }}
      style={{
        zIndex: 1,
        ...style,
      }}
      bounds={"parent"}
      dragHandleClassName="window-header"
      enableResizing={false}
      onDragStart={(_, data) => handleFocus(data.node)}
    >
      <div className="window">
        <div className="window-header">
          <button className="window-button" onClick={() => setDialog(false)}>
            {"[ x ]"}
          </button>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </Rnd>,
    document.body,
  );
}
