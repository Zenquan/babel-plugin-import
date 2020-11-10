//实现模块的按需加载

//import {Button} from 'antd';

//babel-plugin-import

//import {Button, ALert} from 'antd';

//import Button from 'antd/lib/button'

//import Alert from 'antd/lib/alert';
const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库
let code = `import {Button, ALert} from 'antd'`;
let importPlugin = {
    visitor: {
        ImportDeclaration(path){
            let {node} = path;
            //console.log(node);
            let source = node.source.value;
            let specifiers =  node.specifiers;
            if(!t.isImportDefaultSpecifier(specifiers[0])){
                specifiers = specifiers.map(specifier=>{
                    return t.importDeclaration(
                        [t.importDefaultSpecifier(specifier.local)],
                        t.stringLiteral(`${source}/lib/${specifier.local.name.toLowerCase()}`)
                    )
                });
                path.replaceWithMultiple(specifiers);
            }
        }
    }
}
let r = babel.transform(code, {
    plugins: [
        importPlugin
    ]
})

module.exports = importPlugin;