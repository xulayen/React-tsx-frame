# 如何是config-overrider配置生效

- npm i react-app-rewired customize-cra --save-dev

- 修改 package.json 里的配置

``` js

...
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
...

```

- 在根目录创建一个 config-overrides.js 文件，添加以下配置

``` js

const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
 
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  })
)

```

- 在根目录创建一个 paths.json 文件，添加以下配置

``` js

{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}

```

- 修改 tsconfig.json 里的配置

``` js


{
  ...
  "include": [
    "src"
  ],
  "extends": "./paths.json"


```