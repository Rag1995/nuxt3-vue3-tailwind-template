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
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  rules: {
    'no-undef': 'off',
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/multi-word-component-names': ['error', {
      ignores: ['index'],
    }],
  },
}
