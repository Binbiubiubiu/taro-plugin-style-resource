import { IPluginContext } from "@tarojs/service";
import type { StyleResourcesLoaderNormalizedOptions } from "style-resources-loader";
declare type StyleProcessType = "less" | "stylus";
export declare type PluginOptions = {
    [key in StyleProcessType]?: StyleResourcesLoaderNormalizedOptions;
};
declare const _default: (ctx: IPluginContext, pluginOpts: PluginOptions) => void;
export default _default;
