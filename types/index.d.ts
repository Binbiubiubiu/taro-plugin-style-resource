import { IPluginContext } from "@tarojs/service";
import type { StyleResourcesLoaderNormalizedOptions } from "style-resources-loader";
declare const SUPPORTED_TYPE: readonly ["less", "stylus"];
declare type StyleProcessType = typeof SUPPORTED_TYPE[number];
export declare type PluginOptions = {
    [key in StyleProcessType]?: StyleResourcesLoaderNormalizedOptions;
};
declare const _default: (ctx: IPluginContext, pluginOpts: PluginOptions) => void;
export default _default;
