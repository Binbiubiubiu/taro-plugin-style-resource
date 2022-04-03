import { IPluginContext } from "@tarojs/service";
import type Config from "webpack-chain";
import type { StyleResourcesLoaderNormalizedOptions } from "style-resources-loader";
import type Joi from "@hapi/joi";

type StyleProcessType = "less" | "stylus"

type PluginOptions = {
  [key in StyleProcessType]?: StyleResourcesLoaderNormalizedOptions;
};

export default (ctx: IPluginContext, pluginOpts: PluginOptions) => {
  ctx.addPluginOptsSchema((joi: Joi.Root) => {
    const styleLoaderSchema = joi
      .object()
      .keys({
        patterns: joi
          .any()
          .required()
          .concat(
            joi
              .alternatives()
              .try(joi.string(), joi.array().items(joi.string()).unique())
          ),
        injector: [joi.any().valid("prepend", "append"), joi.func()],
        globOptions: joi.object(),
        resolveUrl: joi.bool(),
      });

    return joi.object().keys({
      less:styleLoaderSchema,
      stylus:styleLoaderSchema,
    }).required().or('less', 'stylus');
  });

  ctx.modifyWebpackChain((c) => {
    const chain = c.chain as unknown as Config;
    Object.keys(pluginOpts).map((type) => {
      chain.module
        .rule(type)
        .oneOf("0")
        .use("style-resource")
        .loader("style-resources-loader")
        .options(pluginOpts[type]);
    });
  });
};
