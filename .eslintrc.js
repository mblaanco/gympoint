module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
  
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      "prettier/prettier": "error", // prettier retorna um erro no padrão
      "class-methods-use-this": "off", // remove a obrigatoriedade do this
      "no-param-reassign": "off", // permite receber um parâmetro e alterá-lo
      "camelcase": "off", // variávelAssim <- padrão
      "no-unused-vars": ["error", {"argsIgnorePattern": "next" }] // permite não usar uma varíável chamada next;
    },
  };
  