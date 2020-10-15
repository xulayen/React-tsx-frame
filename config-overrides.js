const {
    override,
    fixBabelImports,
    addDecoratorsLegacy,
    addWebpackAlias,
    addWebpackPlugin,
} = require('customize-cra');
const path = require('path');
// 补充：对开发友好，打包完成桌面提醒
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const alter_config = () => (config, env) => {
    console.log(env);
    const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
    config.module.rules[oneOf_loc].oneOf = [    //例如要增加处理less的配置
        {
            test: /\.css$/,
            exclude: /node_modules|antd\.css/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    //获取localIdentName
                    options: {
                        modules: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'//配置生成的标识符(ident)
                        },
                    }
                }
            ]

        },
        {
            test: /\.less$/,
            exclude: /node_modules|antd|\.module\.less$/,  // 排除 xxx.module.less 模块化文件

            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'//配置生成的标识符(ident)
                        },
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        },
        {
            test: /\.module\.less$/,
            exclude: /node_modules|antd\.less/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'//配置生成的标识符(ident)
                        },
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]

    return config;
}


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
            publicPath: 'http://10.20.26.19/ttt/vendor',
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
    addWebpackAlias({
        "@": path.resolve(__dirname, 'src')
    }),
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: true
    }, {
        libraryName: "swiper",
        style: true
    }, {
        libraryName: "antd",
        style: true
    }),
    // 打包编译完成提醒
    addWebpackPlugin(new WebpackBuildNotifierPlugin({
        title: "打包成功！",
        suppressSuccess: true
    })),
    addCustomize(),
    alter_config()
)