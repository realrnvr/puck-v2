import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "./light-box-base.css";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import ReaderPlugin from "../../plugin/ReaderPlugin";

import { useState } from "react";
import { animationOptions, imageFitOptions } from "../../assets/data";
import { useChapterImages } from "../../hooks/useChapterImages";

export default function LightBoxBase() {
  const images = useChapterImages();

  // carousel
  const [carousel, setCarousel] = useState({
    finite: true,
    preload: [2],
    padding: [16],
    spacing: [30],
    imageFit: imageFitOptions[0],
  });

  // animation
  const [animation, setAnimation] = useState({
    swipe: [500],
    easingSwipe: animationOptions[2],
    easingNavigation: animationOptions[3],
    zoom: [500],
  });

  // zoom
  const [zoom, setZoom] = useState({
    minZoom: [1],
    maxZoomPixelRatio: [1],
    zoomInMultiplier: [2],
    doubleTapDelay: [300],
    doubleClickDelay: [500],
    doubleClickMaxStops: [2],
    keyboardMoveDistance: [50],
    wheelZoomDistanceFactor: [100],
    pinchZoomDistanceFactor: [100],
  });

  // slideshow
  const [slideshow, setSlideshow] = useState({
    autoplay: false,
    delay: [3000],
  });

  return (
    <div className="light-box-base">
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
        // portal={{ container: { dir: "rtl" } }}
        // inline={{ dir: "rtl" }}
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
        control={{
          carousel,
          setCarousel,
          animation,
          setAnimation,
          zoom,
          setZoom,
          slideshow,
          setSlideshow,
          pageIndex: images.index,
          setPageIndex: images.setIndex,
          slidesLength: images.data.length - 1,
          isAtStart: images.isIndexAtStart,
          isAtEnd: images.isIndexAtEnd,
        }}
        on={{
          view: ({ index: currentIndex }) => {
            images.handleIndexChange(currentIndex);
          },
        }}
      />
    </div>
  );
}
