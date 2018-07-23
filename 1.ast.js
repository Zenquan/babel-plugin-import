const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

let code = `function ast(){}`;
let tree = esprima.parseScript(code);
estraverse.traverse(tree, {
    enter(node) {
        if (node.type === 'Identifier') {
            node.name = 'Jomsou';
        }
        // console.log('enter: '+node.type);
        // }, leave(node){
        //  console.log('leave: '+node.type);
     }
});
let r = escodegen.generate(tree);
console.log(r);