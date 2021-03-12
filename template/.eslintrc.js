// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',

    "no-tabs": "off",
    'arrow-parens': 'off',
    // 'import/extensions': ['error', 'always', {
    // js: 'never',
    // vue: 'never'
    // }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': "off", // 结尾逗号,
    'import/no-dynamic-require': 'off', // 不能使用动态require
    'global-require': 'off', // 不能使用require
    'no-console': 'off', // 不能有console，警告
    "quotes": 'off', // 引号 规则 必须是双引号 转义规避
    "arrow-body-style": ["off"], // 箭头函数的的格式 
    'no-restricted-syntax': 'off',
    "no-lonely-if": "off",
    'linebreak-style': ["off"],
    "semi": "off", //强行加分号
    "no-param-reassign": 'off',
    "space-before-function-paren": 'off',
    "one-var": 'off',
    "no-array-constructor": 'off'
  }
}
