const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库

/**
 * function Jomsou(name){
 *  this.name = name;
 * }
 * Jomsou.prototype.getName = function(){
 *  return this.name;
 * }
 */
let code = `
class Jomsou{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
`
let ClassPlugin = {
    visitor: {
        ClassDeclaration(path){
            let {node} = path;
            let className = node.id.name;
            className = t.identifier(className);
            //console.log(className);
            let funs = t.functionDeclaration(className, [], t.blockStatement([]), false, false);
            path.replaceWith(funs);
        }
    }
}
let d = babel.transform(code, {
    plugins: [
        ClassPlugin
    ]
})
console.log(d.code);