const t = require('babel-types'); //babel类型转化库
module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        let {
          node
        } = path;

        let libName, libPath;
        if (state.opts) {
          const { disable } = state.opts;
          if (disable) return;
          libName = state.opts.libName;
          libPath = state.opts.libPath;
        }
        let source = node.source.value;
        let specifiers = node.specifiers;
        if (
            !t.isImportDefaultSpecifier(specifiers[0]) 
            && libName === source
          ) {
          specifiers = specifiers.map(specifier => {
            const tmpLibPath = libPath ? libPath : 'lib'
            return t.importDeclaration(
              [t.importDefaultSpecifier(specifier.local)],
              t.stringLiteral(`${source}/${tmpLibPath}/${specifier.local.name.toLowerCase()}`)
            )
          });
          path.replaceWithMultiple(specifiers);
        }
      }
    }
  }
};
