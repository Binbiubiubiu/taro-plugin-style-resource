import { IPluginContext } from "@tarojs/service";
import type Config from "webpack-chain";
import type { StyleResourcesLoaderNormalizedOptions } from "style-resources-loader";
import type Joi from "@hapi/joi";
import type { Rule } from "webpack-chain";

const SUPPORTED_TYPE = ["less", "stylus"] as const;

type StyleProcessType = typeof SUPPORTED_TYPE[number];

export type PluginOptions = {
  [key in StyleProcessType]?: StyleResourcesLoaderNormalizedOptions;
};

export default (ctx: IPluginContext, pluginOpts: PluginOptions) => {
  ctx.addPluginOptsSchema((joi: Joi.Root) => {
    const styleLoaderSchema = joi.object().keys({
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

    const optionsSchema = SUPPORTED_TYPE.reduce((ops, key) => {
      ops[key] = styleLoaderSchema;
      return ops;
    }, {});

    return joi
      .object()
      .keys(optionsSchema)
      .required()
      .or(...SUPPORTED_TYPE);
  });

  ctx.modifyWebpackChain((c) => {
    const chain = c.chain as unknown as Config;
    if (pluginOpts.stylus) {
      (pluginOpts as any)["styl"] = pluginOpts.stylus;
    }
    Object.keys(pluginOpts).map((type) => {
      let cur: any = chain.module.rule(type);
      if (cur.oneOfs.values().length !== 0) {
        cur = [...cur.oneOfs.values()];
      } else if (cur.uses.values().length == 0) {
        cur = null;
      }

      []
        .concat(cur)
        .filter(Boolean)
        .forEach((item: Rule) => {
          item
            .use("style-resource")
            .loader("style-resources-loader")
            .options(pluginOpts[type]);
        });
    });
  });
};
