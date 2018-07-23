const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库

/**
 * function Jomsou(name){
 *  
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
            let classList = node.body.body;
            //console.log(className);
            let funs = t.functionDeclaration(className, [], t.blockStatement([]), false, false);
            
            let es5func = [];

            classList.forEach((item, index)=>{
                let body = classList[index].body;
               
                if(item.kind==='constructor')
                {
                    let params = item.params.length?item.params.map(item=>item.name):[];
                    params = t.identifier(params);
                    funs = t.functionDeclaration(className, [params], body, false, false);
                    path.replaceWith(funs);
                }else {
                    let protoObj = t.memberExpression(className, t.identifier('prototype'));
                    let left = t.memberExpression(protoObj, t.identifier(item.key.name));
                    let right = t.functionExpression(null, [], body, false, false);

                    let assign = t.assignmentExpression('=', left, right);
                    es5func.push(assign);
                }
            })
            if(es5func.length==0)
            {
                path.replaceWith(funs);
            }
            else {
                es5func.push(funs);
                path.replaceWithMultiple(es5func);
            }
        }
    }
}
let d = babel.transform(code, {
    plugins: [
        ClassPlugin
    ]
})
console.log(d.code);