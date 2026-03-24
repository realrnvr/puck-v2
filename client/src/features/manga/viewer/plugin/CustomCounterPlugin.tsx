import {
  createModule,
  MODULE_CONTROLLER,
  PLUGIN_COUNTER,
  PluginProps,
} from "yet-another-react-lightbox";
import { resolveCounterProps } from "../core/component/custom_counter/props";
import CustomCounter from "../core/component/custom_counter/CustomCounter";

export function CustomCounterPlugin({ augment, addChild }: PluginProps) {
  augment(({ counter, ...restProps }) => ({
    counter: resolveCounterProps(counter),
    ...restProps,
  }));

  addChild(MODULE_CONTROLLER, createModule(PLUGIN_COUNTER, CustomCounter));
}
