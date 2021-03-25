const babel = require('babel-core'); 
const babelImportPlugin = require('../lib')

let code = `import {Button, ALert} from 'antd'`;

let d = babel.transform(code, {
  plugins: [
    [babelImportPlugin, {
      libName: 'antd',
      libPath: 'lib',
      disable: false
    }]
  ]
})

/**
 * import Button from 'antd/lib/button';
 * import ALert from 'antd/lib/alert';
 */
console.log('>>>', d.code);