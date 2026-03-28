import "./manga-viewer.css";

import React, { Suspense } from "react";
import Skeleton from "../../skeletons/Skeleton";
import LightBoxBase from "../../viewer/core/lightbox/LightBoxBase";
import ControlPanel from "../../viewer/component/control_panel/ControlPanel";
import { createPortal } from "react-dom";

const MemoControlPanel = React.memo(ControlPanel);

export default function MangaViewer() {
  const [fullscreenEl, setFullscreenEl] = React.useState(null);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Suspense fallback={<Skeleton />}>
        <LightBoxBase
          onEnterFullscreen={() => setFullscreenEl(document.fullscreenElement)}
          onExitFullscreen={() => setFullscreenEl(null)}
        />
      </Suspense>

      {fullscreenEl ? (
        createPortal(<MemoControlPanel />, fullscreenEl)
      ) : (
        <MemoControlPanel />
      )}
    </div>
  );
}
