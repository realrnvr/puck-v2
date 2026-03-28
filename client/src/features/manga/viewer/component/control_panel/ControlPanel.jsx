import "./control-panel.css";

import { InfiniteScrollFooter } from "../infinite_scroll_footer/InfiniteScrollFooter";
import { useWindowManager } from "../../../../window_system/hooks/useWindowManager";
import { useMangaController } from "../../hooks/useMangaController";
import { useLightBoxProps } from "../../hooks/useLightBoxProps";
import { animationOptions, imageFitOptions } from "../../assets/data";
import { Range } from "react-range";
import { Virtuoso } from "react-virtuoso";

import React from "react";
import Select from "react-select";
import Window from "../../../../window_system/components/window/Window";

export default function ControlPanel() {
  const [imageFit, setImageFit] = React.useState(false);
  const [behaviors, setBehaviors] = React.useState(false);
  const manager = useWindowManager();
  const { chapter, navigation, aggregate, statics, variants } =
    useMangaController();
  const {
    carousel,
    setCarousel,
    animation,
    setAnimation,
    zoom,
    setZoom,
    slideshow,
    setSlideshow,
    setIsRTL,
  } = useLightBoxProps();

  return (
    <section className="dummy">
      <header className="dummy__header">
        <nav className="dummy__navigation">
          <ul className="dummy__nav-list">
            <li className="dummy__list-el">
              <button className="dummy__list-btn">Page Layout</button>
            </li>
            <li className="dummy__list-el">
              <button
                className="dummy__list-btn"
                onClick={() => {
                  setImageFit(true);
                  manager.bringToFrontById("image-fit");
                }}
              >
                Image Fit
              </button>
            </li>
            <li className="dummy__list-el">
              <button className="dummy__list-btn">Key Binds</button>
            </li>
            <li className="dummy__list-el">
              <button
                className="dummy__list-btn"
                onClick={() => {
                  setBehaviors(true);
                  manager.bringToFrontById("behaviors");
                }}
              >
                Behaviors
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* @__Image_Fit_Window__ */}
      {
        <Window
          id={"image-fit"}
          state={{ setDialog: setImageFit, dialog: imageFit }}
          defaultProps={{ height: 350, width: 400, title: "Image Fit" }}
        >
          <div className="dummy__image-fit-container">
            <div className="dummy__control-wrapper">
              <label htmlFor="">padding: {carousel.padding}</label>
              <Range
                label="heyyaa"
                step={1}
                min={0}
                max={100}
                values={carousel.padding}
                onChange={(e) =>
                  setCarousel((prevCarousel) => {
                    return {
                      ...prevCarousel,
                      padding: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Spacing: {carousel.spacing}</label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={100}
                values={carousel.spacing}
                onChange={(e) =>
                  setCarousel((prevCarousel) => {
                    return {
                      ...prevCarousel,
                      spacing: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Preload: {carousel.preload}</label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={5}
                values={carousel.preload}
                onChange={(e) =>
                  setCarousel((prevCarousel) => {
                    return {
                      ...prevCarousel,
                      preload: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
                        height: "20px",
                        width: "5px",
                        backgroundColor: "red",
                      }}
                    ></div>
                  );
                }}
              />
            </div>
            <div className="dummy__control-wrapper dummy__control-wrapper--mt">
              <label htmlFor="">Image Fit: {carousel.imageFit.value}</label>
              <Select
                isSearchable={false}
                value={carousel.imageFit}
                name="imageFit"
                options={imageFitOptions}
                onChange={(e) =>
                  setCarousel((prevCarousel) => {
                    return {
                      ...prevCarousel,
                      imageFit: e,
                    };
                  })
                }
              />
            </div>
          </div>
        </Window>
      }
      {/* @__Image_Fit_Window__ */}
      {/* @__Behaviors_Window__ */}
      {
        <Window
          id={"behaviors"}
          state={{ setDialog: setBehaviors, dialog: behaviors }}
          defaultProps={{ height: 350, width: 400, title: "Behaviors" }}
        >
          <div className="dummy__image-fit-container">
            <div className="dummy__control-wrapper">
              <label htmlFor="">Swipe: {animation.swipe}</label>
              <Range
                label="Select your value"
                step={10}
                min={0}
                max={1000}
                values={animation.swipe}
                onChange={(e) =>
                  setAnimation((prevAnimation) => {
                    return {
                      ...prevAnimation,
                      swipe: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Zoom: {animation.zoom}</label>
              <Range
                label="Select your value"
                step={10}
                min={0}
                max={1000}
                values={animation.zoom}
                onChange={(e) =>
                  setAnimation((prevAnimation) => {
                    return {
                      ...prevAnimation,
                      zoom: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div
              className="dummy__control-wrapper"
              style={{ marginTop: "1rem" }}
            >
              <label htmlFor="">
                Easing Swipe: {animation.easingSwipe.label}
              </label>
              <Select
                isSearchable={false}
                value={animation.easingSwipe}
                name="swipe"
                options={animationOptions}
                onChange={(e) =>
                  setAnimation((prevAnimation) => {
                    return {
                      ...prevAnimation,
                      easingSwipe: e,
                    };
                  })
                }
              />
            </div>
            <div
              className="dummy__control-wrapper"
              style={{ marginTop: "1rem" }}
            >
              <label htmlFor="">
                Easing Navigation: {animation.easingNavigation.label}
              </label>
              <Select
                isSearchable={false}
                value={animation.easingNavigation}
                name="navigation"
                options={animationOptions}
                onChange={(e) =>
                  setAnimation((prevAnimation) => {
                    return {
                      ...prevAnimation,
                      easingNavigation: e,
                    };
                  })
                }
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Min Zoom: {zoom.minZoom}</label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.minZoom}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      minZoom: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Max Zoom Pixel Ration: {zoom.maxZoomPixelRatio}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.maxZoomPixelRatio}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      maxZoomPixelRatio: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Zoom In Multiplier: {zoom.zoomInMultiplier}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.zoomInMultiplier}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      zoomInMultiplier: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Double Tap Delay: {zoom.doubleTapDelay}</label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.doubleTapDelay}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      doubleTapDelay: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Double Click Delay : {zoom.doubleClickDelay}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.doubleClickDelay}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      doubleClickDelay: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Double Click Max Stops: {zoom.doubleClickMaxStops}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.doubleClickMaxStops}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      doubleClickMaxStops: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Keyboard Move Distance: {zoom.keyboardMoveDistance}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.keyboardMoveDistance}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      keyboardMoveDistance: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Wheel Zoom Distance Factor: {zoom.wheelZoomDistanceFactor}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.wheelZoomDistanceFactor}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      wheelZoomDistanceFactor: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">
                Pinch Zoom Distance Factor: {zoom.pinchZoomDistanceFactor}
              </label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={1000}
                values={zoom.pinchZoomDistanceFactor}
                onChange={(e) =>
                  setZoom((prevZoom) => {
                    return {
                      ...prevZoom,
                      pinchZoomDistanceFactor: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
            <div className="dummy__control-wrapper">
              <label htmlFor="">Delay: {slideshow.delay}</label>
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={5000}
                values={slideshow.delay}
                onChange={(e) =>
                  setSlideshow((prevSlideshow) => {
                    return {
                      ...prevSlideshow,
                      delay: e,
                    };
                  })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
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
              />
            </div>
          </div>
        </Window>
      }
      {/* @__Behaviors_Window__ */}
      <div className="dummy__chapter-container">
        <div className="dummy__meta">
          {statics.isPending && <div>Loading...</div>}
          {statics.isError && <div>{statics.error.message}</div>}
          {!statics.isPending && !statics.isError && (
            <div className="dummy__chapter-info">
              <div>
                <p>Manga: {Object.values(statics.manga.attributes.title)[0]}</p>
                <p>Chapter: {statics.data.data.attributes.title}</p>
              </div>
              <div>
                <p>volume: {chapter.activeRow?.volume}</p>
                <p>chapter: {chapter.activeRow?.chapter}</p>
              </div>
            </div>
          )}
        </div>
        <div className="dummy__nav-btn-container">
          <button
            onClick={navigation.prev}
            disabled={!navigation.getPrevId(chapter.index)}
          >
            {"<"}
          </button>
          <p>Chapter: {chapter.activeRow?.chapter}</p>
          <button
            onClick={navigation.next}
            disabled={!navigation.getNextId(chapter.index)}
          >
            {">"}
          </button>
          <button onClick={() => setIsRTL((prevIsRTL) => !prevIsRTL)}>
            Change Reading direction
          </button>
        </div>
        <div className="dummy__chapter-list-container">
          {aggregate.isPending && <div>Loading...</div>}
          {aggregate.isError && <div>{aggregate.error.message}</div>}
          {!aggregate.isPending && !aggregate.isError && (
            <Virtuoso
              className="reader__list"
              data={chapter.list}
              itemContent={(_, row) => {
                if (row.type === "volume") {
                  return (
                    <div
                      className="reader__list-volume-header"
                      style={{
                        backgroundColor:
                          row.volume === chapter.activeVolume ? "pink" : null,
                      }}
                    >
                      <span>
                        Volume {row.volume === "none" ? "—" : row.volume}
                      </span>
                    </div>
                  );
                }

                if (row.type === "chapter") {
                  return (
                    <div
                      className="reader__list-chapter"
                      style={{
                        backgroundColor: row.chapterId.has(chapter.id)
                          ? "pink"
                          : null,
                      }}
                      onClick={() =>
                        navigation.goTo({
                          newChapterId: row.chapterId.values().next().value,
                          newLanguage: chapter.language,
                        })
                      }
                    >
                      chapter: {row.chapter}
                    </div>
                  );
                }
              }}
            />
          )}
          <div className="dummy__feed-list">
            {variants.isPending && <div>Loading...</div>}
            {variants.error && <div>Error: {variants.error.message}</div>}
            {!variants.isPending && !variants.error && (
              <Virtuoso
                data={variants.data}
                context={{
                  hasNextPage: variants.hasNext,
                  fetchNextPage: variants.fetchNext,
                  isFetching: variants.isFetching,
                  isFetchingNextPage: variants.isFetchingNext,
                }}
                itemContent={(_, row) => {
                  const attr = row.attributes;

                  const group = row.relationships?.find(
                    (r) => r.type === "scanlation_group",
                  );

                  const user = row.relationships?.find(
                    (r) => r.type === "user",
                  );

                  return (
                    <div
                      key={row.id}
                      className="manga-chapter-variants__chapter-card"
                      style={{
                        backgroundColor: row.id === chapter.id ? "pink" : null,
                      }}
                      onClick={() =>
                        navigation.goTo({
                          newChapterId: row.id,
                          newLanguage: attr.translatedLanguage,
                        })
                      }
                    >
                      <div className="manga-chapter-variants__chapter-title">
                        {attr.title ?? `Ch. ${attr.chapter}`}
                      </div>

                      <div className="manga-chapter-variants__chapter-meta">
                        <span>{attr.translatedLanguage?.toUpperCase()}</span>
                        <span>{group?.attributes?.name ?? "No Group"}</span>
                        <span>{user?.attributes?.username ?? ""}</span>
                      </div>
                    </div>
                  );
                }}
                components={{
                  Footer: InfiniteScrollFooter,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
