const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: '/h5-page-parser/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'h5-page-parser',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'static',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: true,
  filenameHashing: false,
  transpileDependencies: [
    'h5-form-render',
  ],
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
          })
        ],
      }
    }
  },
  parallel: true,
  devServer: {
    overlay: false,
    proxy: {
      '/api': {
        target: 'http://106.53.93.81',
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 自定义的变量
            'primary-color': '#1989fa'
          },
        }
      },
    },
  },
}
