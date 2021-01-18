const t = require('babel-types');
module.exports = (src, lib) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        let {
          node
        } = path;
        let source = node.source.value;
        let specifiers = node.specifiers;
        if (!t.isImportDefaultSpecifier(specifiers[0]) && source === lib) {
          specifiers = specifiers.map(specifier => {
            let tmpSrc = src ? src : 'lib';
            return t.importDeclaration(
              [t.importDefaultSpecifier(specifier.local)],
              t.stringLiteral(`${source}/${tmpSrc}/${specifier.local.name.toLowerCase()}`)
            )
          });
          path.replaceWithMultiple(specifiers);
        }
      }
    }
  }
};
