import { clsx, cssClass, useLightboxState } from "yet-another-react-lightbox";
import { ExtendedComponentProps, resolveCounterProps } from "./props";

export default function CustomCounter({ counter }: ExtendedComponentProps) {
  const { slides, currentIndex } = useLightboxState();

  const {
    separator,
    container,
    activeChapterCurrentIndex,
    activeChapterSlideLength,
    className: legacyClassName,
    ...legacyRest
  } = resolveCounterProps(counter);

  const { className, ...rest } = container || {};

  return (
    <div
      className={clsx(cssClass("counter"), className || legacyClassName)}
      {...legacyRest}
      {...rest}
      // slides already provide the "k of N" label, so there is no need to override the `aria-hidden` attribute here
      aria-hidden
    >
      {activeChapterCurrentIndex ?? currentIndex + 1} {separator}{" "}
      {activeChapterSlideLength ?? slides.length}
    </div>
  );
}
