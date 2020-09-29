# 多环境配置

> 安装 dotenv-cli 包
``` js
 
$ npm run dotenv-cli --save-dev

```

> 根据需求创建.env文件
- （注意：只能以 REACT_APP_ 开头），如创建 .env.development、.env.production，内容如下：
``` js

// .env.development
REACT_APP_ENV=development
 
// .env.production
REACT_APP_ENV=production

```

> 继续修改 package.json 中的 scripts 指定环境

``` js

"scripts": {
    "start": "react-app-rewired start",
    "build:dev": "dotenv -e .env.development react-app-rewired build",
    "build:pro": "dotenv -e .env.production react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}

```
