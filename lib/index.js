const babel = require('babel-core'); //babel核心解析库
const t = require('babel-types'); //babel类型转化库
let importPlugin = {
  visitor: {
    ImportDeclaration(path) {
      let {
        node
      } = path;
      let source = node.source.value;
      console.log('>>>', source);
      let specifiers = node.specifiers;
      if (!t.isImportDefaultSpecifier(specifiers[0])) {
        specifiers = specifiers.map(specifier => {
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

module.exports = importPlugin;
