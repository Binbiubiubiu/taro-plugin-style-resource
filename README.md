# taro-plugin-style-resource

Taro 构建编译插件,给`less`或`stylus`添加公共样式资源

## 使用

### 安装

```
npm i taro-plugin-style-resource

# yarn
yarn add taro-plugin-style-resource
```

### 使用插件

`/config/index.js`

```js
const path = require("path");
// 示例, 如果你使用 `vs code` 作为开发工具， 你还可以使用注释的语法引入插件包含的声明文件，可获得类似于typescript的友好提示
/**
 * @typedef { import("taro-plugin-style-resource").PluginOptions } PluginOptions
 * @type {PluginOptions}
 */
const pluginOptions = {
  less: {
    patterns: [path.resolve(__dirname, "..", "src/styles/index.less")],
  },
};
const config = {
  plugins: [["taro-plugin-style-resource", pluginOptions]],
};
```

## API

### 插件配置

| 参数   | 类型   | 说明                                                                                              |
| :----- | :----- | :------------------------------------------------------------------------------------------------ |
| less   | Object | [style-resources-loader](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)的配置 |
| stylus | Object | [style-resources-loader](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)的配置 |

### 支持平台

| 平台名称          | 是否支持 |
| :---------------- | :------- |
| H5                | ✅       |
| 微信小程序        | ✅       |
| 京东小程序        | ✅       |
| 百度小程序        | ✅       |
| 支付宝小程序      | ✅       |
| 字节跳动小程序    | ✅       |
| QQ 小程序         | ✅       |
| 钉钉小程序        | ✅       |
| 企业微信小程序    | ✅       |
| 支付宝 IOT 小程序 | ✅       |
| 飞书小程序        | ✅       |
| 快手小程序        | ✅       |
| 小红书小程序      | ✅       |
| ReactNative       | ❌       |
