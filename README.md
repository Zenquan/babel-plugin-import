## babel-import-plugin

### 安装
```bash
npm i @jomsou/babel-import-plugin -D
```

### 使用

#### babel.config.js配置
```js
const importPlugin = require('@jomsou/babel-import-plugin')

module.exports = {
  "plugins": [
    importPlugin
    // new importPlugin()
  ]
}
```

#### webpack配置
```js
const importPlugin = require('@jomsou/babel-import-plugin')

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
            importPlugin
            // new importPlugin()
        ]
      }
    }, exclude: /node_modules/}
  ]
}
```

前：

![008](https://user-images.githubusercontent.com/38183707/43043709-bdfa41b8-8dcb-11e8-9fde-f361f6d55eae.PNG)


后：

![009](https://user-images.githubusercontent.com/38183707/43043712-c560e8f8-8dcb-11e8-9d66-0d94238c23dc.PNG)

更新日志：

- 2020.11.10 完成v1.1.0并加入github actions
- 2018.10.08 v1.0.0版本