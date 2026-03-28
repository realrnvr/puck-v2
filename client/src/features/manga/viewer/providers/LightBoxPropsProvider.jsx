// @ts-check

import React from "react";
import { LightBoxPropsContext } from "../context/LightBoxPropsContext";
import { animationOptions, imageFitOptions } from "../assets/data";

// @ts-ignore
export default function LightBoxPropsProvider({ children }) {
  // carousel
  const [carousel, setCarousel] = React.useState({
    finite: true,
    preload: [2],
    padding: [16],
    spacing: [30],
    imageFit: imageFitOptions[0],
  });

  // animation
  const [animation, setAnimation] = React.useState({
    swipe: [500],
    easingSwipe: animationOptions[2],
    easingNavigation: animationOptions[3],
    zoom: [500],
  });

  // zoom
  const [zoom, setZoom] = React.useState({
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
  const [slideshow, setSlideshow] = React.useState({
    autoplay: false,
    delay: [3000],
  });

  // RTL
  const [isRTL, setIsRTL] = React.useState(false);

  const ctx = React.useMemo(() => {
    return {
      carousel,
      setCarousel,
      animation,
      setAnimation,
      zoom,
      setZoom,
      slideshow,
      setSlideshow,
      isRTL,
      setIsRTL,
    };
  }, [
    carousel,
    setCarousel,
    animation,
    setAnimation,
    zoom,
    setZoom,
    slideshow,
    setSlideshow,
    isRTL,
    setIsRTL,
  ]);

  return (
    // @ts-ignore
    <LightBoxPropsContext value={ctx}>{children}</LightBoxPropsContext>
  );
}
