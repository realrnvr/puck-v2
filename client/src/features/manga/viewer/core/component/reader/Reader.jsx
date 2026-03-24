import "./reader.css";

import { Virtuoso } from "react-virtuoso";
import { InfiniteScrollFooter } from "../../../component/infinite_scroll_footer/InfiniteScrollFooter";
import { animationOptions, imageFitOptions } from "../../../assets/data";
import { useState } from "react";
import { Range } from "react-range";
import { useWindowManager } from "../../../../../window_system/hooks/useWindowManager";

import Select from "react-select";
import Window from "../../../../../window_system/components/window/Window";

export default function Reader({ children, reader, control }) {
  // window state
  const [imageFit, setImageFit] = useState(false);
  const [behaviors, setBehaviors] = useState(false);
  const manager = useWindowManager();

  return (
    <>
      {children}
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
                <label htmlFor="">padding: {control.carousel.padding}</label>
                <Range
                  label="heyyaa"
                  step={1}
                  min={0}
                  max={100}
                  values={control.carousel.padding}
                  onChange={(e) =>
                    control.setCarousel((prevCarousel) => {
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
                <label htmlFor="">Spacing: {control.carousel.spacing}</label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={100}
                  values={control.carousel.spacing}
                  onChange={(e) =>
                    control.setCarousel((prevCarousel) => {
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
                <label htmlFor="">Preload: {control.carousel.preload}</label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={5}
                  values={control.carousel.preload}
                  onChange={(e) =>
                    control.setCarousel((prevCarousel) => {
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
                <label htmlFor="">
                  Image Fit: {control.carousel.imageFit.value}
                </label>
                <Select
                  isSearchable={false}
                  value={control.carousel.imageFit}
                  name="imageFit"
                  options={imageFitOptions}
                  onChange={(e) =>
                    control.setCarousel((prevCarousel) => {
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
                <label htmlFor="">Swipe: {control.animation.swipe}</label>
                <Range
                  label="Select your value"
                  step={10}
                  min={0}
                  max={1000}
                  values={control.animation.swipe}
                  onChange={(e) =>
                    control.setAnimation((prevAnimation) => {
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
                <label htmlFor="">Zoom: {control.animation.zoom}</label>
                <Range
                  label="Select your value"
                  step={10}
                  min={0}
                  max={1000}
                  values={control.animation.zoom}
                  onChange={(e) =>
                    control.setAnimation((prevAnimation) => {
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
                  Easing Swipe: {control.animation.easingSwipe.label}
                </label>
                <Select
                  isSearchable={false}
                  value={control.animation.easingSwipe}
                  name="swipe"
                  options={animationOptions}
                  onChange={(e) =>
                    control.setAnimation((prevAnimation) => {
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
                  Easing Navigation: {control.animation.easingNavigation.label}
                </label>
                <Select
                  isSearchable={false}
                  value={control.animation.easingNavigation}
                  name="navigation"
                  options={animationOptions}
                  onChange={(e) =>
                    control.setAnimation((prevAnimation) => {
                      return {
                        ...prevAnimation,
                        easingNavigation: e,
                      };
                    })
                  }
                />
              </div>
              <div className="dummy__control-wrapper">
                <label htmlFor="">Min Zoom: {control.zoom.minZoom}</label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.minZoom}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Max Zoom Pixel Ration: {control.zoom.maxZoomPixelRatio}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.maxZoomPixelRatio}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Zoom In Multiplier: {control.zoom.zoomInMultiplier}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.zoomInMultiplier}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                <label htmlFor="">
                  Double Tap Delay: {control.zoom.doubleTapDelay}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.doubleTapDelay}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Double Click Delay : {control.zoom.doubleClickDelay}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.doubleClickDelay}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Double Click Max Stops: {control.zoom.doubleClickMaxStops}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.doubleClickMaxStops}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Keyboard Move Distance: {control.zoom.keyboardMoveDistance}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.keyboardMoveDistance}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Wheel Zoom Distance Factor:{" "}
                  {control.zoom.wheelZoomDistanceFactor}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.wheelZoomDistanceFactor}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                  Pinch Zoom Distance Factor:{" "}
                  {control.zoom.pinchZoomDistanceFactor}
                </label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={1000}
                  values={control.zoom.pinchZoomDistanceFactor}
                  onChange={(e) =>
                    control.setZoom((prevZoom) => {
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
                <label htmlFor="">Delay: {control.slideshow.delay}</label>
                <Range
                  label="Select your value"
                  step={1}
                  min={0}
                  max={5000}
                  values={control.slideshow.delay}
                  onChange={(e) =>
                    control.setSlideshow((prevSlideshow) => {
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
            {reader.staticsIsPending && <div>Loading...</div>}
            {reader.staticsIsError && <div>{reader.staticsError.message}</div>}
            {!reader.staticsIsPending && !reader.staticsError && (
              <div className="dummy__chapter-info">
                <div>
                  <p>
                    Manga: {Object.values(reader.mangaData.attributes.title)[0]}
                  </p>
                  <p>Chapter: {reader.staticsData.data.attributes.title}</p>
                </div>
                <div>
                  <p>volume: {reader.activeChapter?.volume}</p>
                  <p>chapter: {reader.activeChapter?.chapter}</p>
                </div>
              </div>
            )}
          </div>
          <div className="dummy__nav-btn-container">
            <button
              onClick={reader.handlePrevChapter}
              disabled={!reader.getPrevChapter(reader.rows, reader.index)}
            >
              {"<"}
            </button>
            <p>Chapter: {reader.activeChapter?.chapter}</p>
            <button
              onClick={reader.handleNextChapter}
              disabled={!reader.getNextChapter(reader.rows, reader.index)}
            >
              {">"}
            </button>
          </div>
          <div className="dummy__chapter-list-container">
            {reader.isPending && <div>Loading...</div>}
            {reader.isError && <div>{reader.error.message}</div>}
            {!reader.isPending && !reader.isError && (
              <Virtuoso
                className="reader__list"
                data={reader.rows}
                itemContent={(_, row) => {
                  if (row.type === "volume") {
                    return (
                      <div
                        className="reader__list-volume-header"
                        style={{
                          backgroundColor:
                            row.volume === reader.activeVolume ? "pink" : null,
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
                          backgroundColor: row.chapterId.has(reader.chapterId)
                            ? "pink"
                            : null,
                        }}
                        onClick={() =>
                          reader.handleOnClickNavigation({
                            newChapterId: row.chapterId.values().next().value,
                            newLanguage: reader.language,
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
              {reader.isInifintePending && <div>Loading...</div>}
              {reader.infiniteError && (
                <div>Error: {reader.infiniteError.message}</div>
              )}
              {!reader.isInifintePending && !reader.infiniteError && (
                <Virtuoso
                  data={reader.infiniteData}
                  context={{
                    hasNextPage: reader.hasNextPage,
                    fetchNextPage: reader.fetchNextPage,
                    isFetching: reader.isFetching,
                    isFetchingNextPage: reader.isFetchingNextPage,
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
                          backgroundColor:
                            row.id === reader.chapterId ? "pink" : null,
                        }}
                        onClick={() =>
                          reader.handleOnClickNavigation({
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
            <div className="dummy__page-nav">
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={control.slidesLength}
                values={[control.pageIndex]}
                onChange={(e) => control.setPageIndex(e[0])}
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
          </div>
        </div>
      </section>
    </>
  );
}
