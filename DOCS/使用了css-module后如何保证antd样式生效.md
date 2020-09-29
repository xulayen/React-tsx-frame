# 使用了css-module后如何保证antd样式生效

> 思路：把antd绕开css-module的配置

- 修改config-overrides.js

``` js

config.module.rules[oneOf_loc].oneOf = [    //例如要增加处理less的配置
        {
            test: /\.css$/,
            exclude: /node_modules|antd\.css/,
            ...
        },
        {
            test: /\.less$/,
            exclude: /node_modules|antd|\.module\.less$/,  // 排除 xxx.module.less 模块化文件
            ...
        },
        {
            test: /\.module\.less$/,
            exclude: /node_modules|antd\.less/
            ...
        },
    ]

```