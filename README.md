## babel-import-plugin

### 安装
```bash
npm i @jomsou/babel-import-plugin -D
```

### 使用

#### .babelrc配置
```js
{
  "plugins": [
    "czq-import"
  ]
}
```

#### webpack配置
```js
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
            'czq-import'
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