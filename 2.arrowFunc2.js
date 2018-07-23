let babel = require('babel-core');
let t = require('babel-types');

let code = `let sum = (a, b)=>a+b`;

//.babelrc
let AllowPlugins = {
    visitor: {
        ArrowFunctionExpression(path){
            let node = path.node;
            let params = node.params;
            let body = node.body;
            if(!t.isBlockStatement(body)){
                let returnStatement = t.returnStatement(body);
                body = t.blockStatement([returnStatement]);
            }
            let funcs = t.functionExpression(null, params, body, false, false);
            path.replaceWith(funcs);
        }
    }
}
let r = babel.transform(code, {
    plugins:[
        AllowPlugins
    ]
})

console.log(r.code);

