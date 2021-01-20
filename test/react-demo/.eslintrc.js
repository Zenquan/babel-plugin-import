module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    jest: true,
    node: true,
    serviceworker: true,
    'shared-node-browser': true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  ignorePatterns: ['build', 'coverage', '.eslintrc.js', 'serviceWorkerRegistration.ts'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/prop-types': 'off',
        'spaced-comment': [
          'error',
          'always',
          {
            markers: ['/'],
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
    'no-underscore-dangle': ['error', { allow: ['__WB_MANIFEST'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
