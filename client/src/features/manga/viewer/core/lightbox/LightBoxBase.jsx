import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "./light-box-base.css";

import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import ReaderPlugin from "../../plugin/ReaderPlugin";

import { useChapterImages } from "../../hooks/useChapterImages";
import { useLightBoxProps } from "../../hooks/useLightBoxProps";
import { useMangaController } from "../../hooks/useMangaController";

export default function LightBoxBase({ onEnterFullscreen, onExitFullscreen }) {
  const images = useChapterImages();
  const { carousel, animation, zoom, isRTL } = useLightBoxProps();
  const { navigation } = useMangaController();

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (
        images.isIndexAtEnd &&
        e.key === (isRTL ? "ArrowLeft" : "ArrowRight")
      ) {
        (isRTL ? navigation.prev : navigation.next)();
      }

      if (
        images.isIndexAtStart &&
        e.key === (isRTL ? "ArrowRight" : "ArrowLeft")
      ) {
        (isRTL ? navigation.next : navigation.prev)();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigation, images.isIndexAtEnd, images.isIndexAtStart, isRTL]);

  return (
    <>
      <Lightbox
        index={images.deferredIndex}
        slides={images.data}
        plugins={[
          Inline,
          Counter,
          Fullscreen,
          Download,
          Share,
          Slideshow,
          Zoom,
          ReaderPlugin,
        ]}
        inline={{
          dir: isRTL ? "rtl" : "ltr",
          style: {
            height: "100%",
            width: "100%",
          },
        }}
        carousel={{
          finite: carousel.finite,
          preload: carousel.preload[0],
          padding: `${carousel.padding[0]}px`,
          spacing: `${carousel.spacing[0]}%`,
          imageFit: carousel.imageFit.value,
        }}
        animation={{
          fade: 250,
          swipe: animation.swipe[0],
          easing: {
            fade: "ease",
            swipe: animation.easingSwipe.value,
            navigation: animation.easingNavigation.value,
          },
          zoom: animation.zoom[0],
        }}
        zoom={{
          minZoom: zoom.minZoom[0],
          maxZoomPixelRatio: zoom.maxZoomPixelRatio[0],
          zoomInMultiplier: zoom.zoomInMultiplier[0],
          doubleTapDelay: zoom.doubleTapDelay[0],
          doubleClickDelay: zoom.doubleClickDelay[0],
          doubleClickMaxStops: zoom.doubleClickMaxStops[0],
          keyboardMoveDistance: zoom.keyboardMoveDistance[0],
          wheelZoomDistanceFactor: zoom.wheelZoomDistanceFactor[0],
          pinchZoomDistanceFactor: zoom.pinchZoomDistanceFactor[0],
        }}
        on={{
          view: ({ index: currentIndex }) => {
            images.handleIndexChange(currentIndex);
          },
          enterFullscreen: () => onEnterFullscreen(),
          exitFullscreen: () => onExitFullscreen(),
        }}
      />
    </>
  );
}
