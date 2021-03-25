## babel-plugin-import

### 安装
```bash
npm i @jomsou/babel-plugin-import -D
```

### 使用

### 插件选项

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| libName | <code>String</code> | null | 作用的组件库包名  |
| libPath | <code>String</code> | lib | 作用的目录，eg：'antd/lib/button' -> libPath: "lib" |
| disable | <code>Boolean</code> | false | true为不起作用，false为起作用。
#### .babelrc配置
```js

module.exports = {
  "plugins": [
    ["@jomsou/import", {
      "libName": "antd",
      "libPath": "lib",
      "disable": process.env.NODE_ENV === 'development'
    }]
  ]
}
```
#### babel.config.js配置
```js
const babelImportPlugin = require('@jomsou/babel-plugin-import')

module.exports = {
  "plugins": [
    [babelImportPlugin, {
      libName: "antd",
      libPath: "lib",
      disable: process.env.NODE_ENV === 'development'
    }]
  ]
}
```

#### webpack配置
```js
const babelImportPlugin = require('@jomsou/babel-plugin-import')

rules: [
    {
      test: /\.js$/, use: {
      loader: 'babel-loader',
      options: {
        presets: [
            'env',
            'react'
        ],
        plugins: [
          [babelImportPlugin, {
            libName: 'antd',
            libPath: 'lib',
            disable: process.env.NODE_ENV === 'development'
          }]
        ]
      }
    }, exclude: /node_modules/}
  ]
}
```

antd

前：

![008](https://user-images.githubusercontent.com/38183707/43043709-bdfa41b8-8dcb-11e8-9fde-f361f6d55eae.PNG)


后：

![009](https://user-images.githubusercontent.com/38183707/43043712-c560e8f8-8dcb-11e8-9d66-0d94238c23dc.PNG)

element-ui
![](https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/babel-plugin-import前.png)


后：

![](https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/babel-plugin-import后.png)

更新日志：

- 2021.03.25 修复已知问题
- 2020.11.10 完成v1.1.0并加入github actions
- 2018.10.08 v1.0.0版本