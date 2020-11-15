const babel = require('babel-core'); //babel核心解析库
const t = require('babel-types'); //babel类型转化库
module.exports = function importPlugin (src) {
  let plugin = {
    visitor: {
      ImportDeclaration(path) {
        let {
          node
        } = path;
        let source = node.source.value;
        let specifiers = node.specifiers;
        if (!t.isImportDefaultSpecifier(specifiers[0])) {
          let libSrc = src ? src : '/lib'
          specifiers = specifiers.map(specifier => {
            return t.importDeclaration(
              [t.importDefaultSpecifier(specifier.local)],
              t.stringLiteral(`${source}${libSrc}/${specifier.local.name.toLowerCase()}`)
            )
          });
          path.replaceWithMultiple(specifiers);
        }
      }
    }
  }

  return plugin
}