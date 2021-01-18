module.exports = {
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}': ['npm run format'],
  '*.{css,less,scss}': ['npm run lint:stylelint'],
  '*.{js,jsx,ts,tsx}': ['npm run lint:eslint'],
};
