import { ComponentProps, LightboxProps } from "yet-another-react-lightbox";

/**
 * 🔥 Extended counter type (your custom fields)
 */
export type ExtendedCounter = NonNullable<LightboxProps["counter"]> & {
  activeChapterCurrentIndex?: number | undefined;
  activeChapterSlideLength?: number | undefined;
};

/**
 * 🔥 Default props (typed properly)
 */
export const defaultCounterProps = {
  separator: "/",
  container: {},

  // defaults for your custom fields
  // activeChapterCurrentIndex: undefined,
  // activeChapterSlideLength: undefined,
};

/**
 * 🔥 Resolver (VERY IMPORTANT — preserves custom props)
 */
export const resolveCounterProps = (
  counter?: ExtendedCounter,
): ExtendedCounter => ({
  ...defaultCounterProps,
  ...counter,
});

/**
 * 🔥 Extend component props so plugin receives typed counter
 */
export type ExtendedComponentProps = ComponentProps & {
  counter?: ExtendedCounter;
};
