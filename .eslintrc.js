module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  // plugins: ['@typescript-eslint', 'vue', 'tailwindcss'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  rules: {
    semi: ['off', 'never'],
    '@typescript-eslint/semi': ['warn', 'never'],

    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['warn', { before: false, after: true }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],

    '@typescript-eslint/no-var-requires': 'off',

    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
