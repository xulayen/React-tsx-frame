# 如何打包公共模块到dll中

- 新建dll.conf.dll文件
- 修改package.json中的script
- 修改config-overrides.js
- 然后执行npm run dll
- 执行打包

``` js

const path = require('path')
const webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')


// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
  entry: {
    // 需要提取的库文件
    vendor: ['react', 'react-dom', 'react-native-storage', 'react-router-dom', 'antd', 'mobx', 'mobx-react']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}

```


``` js

script:{
    +"dll": "webpack --config dll.conf.js --mode production",
}

```

``` js


const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');


const addCustomize = () => config => {
    //if (process.env.NODE_ENV === 'production') {
    // config.devtool = false; //去掉map文件
    config.plugins.push(
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./public/vendor/vendor-manifest.json')
        }),
        // 将 dll 注入到 生成的 html 模板中
        new AddAssetHtmlPlugin({
            // dll文件位置
            filepath: path.resolve(__dirname, './public/vendor/*.js'),
            // dll 引用路径
            publicPath: './vendor',
            // dll最终输出的目录
            outputPath: './vendor'
        }),
        // 释放 可以解析项目
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    )
    //}
    return config;
}


module.exports = override(

    //...
    addCustomize(),
    //...
)

```