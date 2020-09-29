const {
    override,
    fixBabelImports,
    addDecoratorsLegacy,
    addWebpackAlias
} = require('customize-cra');
const path = require('path');



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
    alter_config()
)