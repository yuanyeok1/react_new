const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const CracoLessPlugin = require('craco-less');
const { whenProd } = require("@craco/craco");
module.exports = {
    babel: {
        presets: ["@babel/preset-react", "@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-optional-chaining", "emotion", "@babel/plugin-proposal-class-properties"],
        loaderOptions: {},
        loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
    },

    webpack: {
        alias: {
            ['@']: path.resolve(__dirname, 'src')
        },
        plugins: [
          new AntdDayjsWebpackPlugin(),
          // ...whenDev(() => [], []),
          ...whenProd(
            () => [
              new TerserPlugin({
                // sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                  ecma: undefined,
                  parse: {},
                  compress: {
                    warnings: false,
                    drop_console: true, // 生产环境下移除控制台所有的内容
                    drop_debugger: true, // 移除断点
                    pure_funcs: ['console.log'] // 生产环境下移除console
                  }
                }
              }),
            ], []
          )
    
        ],
        configure: {},
        configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#cf2a2a' },
              javascriptEnabled: true,
            },
          },
        },
      }
    ],
};