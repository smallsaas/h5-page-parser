// eslint 规则使用 JavaScript standard 代码规范
// 详情参见 https://standardjs.com/rules-zhcn.html#javascript-standard-style

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': 0, // 在多行元素的内容之前和之后需要换行符
    'vue/v-bind-style': ['error', 'shorthand'], // v-bind使用短写形式
    'vue/html-indent': ['error', 2, { // html缩进
      attribute: 1, // 属性缩进倍数
      baseIndent: 1, // 顶级语句的缩进乘数
      closeBracket: 0, // 右括号的缩进乘数
      alignAttributesVertically: false, // 在多行情况下属性是否应与第一个属性垂直对齐的条件。
      ignores: [], // 忽略节点的选择器
    }],
    'vue/attribute-hyphenation': ['error', 'always', { // 在模板中的自定义组件上实施属性命名样式
      ignore: [],
    }],
    'vue/html-closing-bracket-newline': ['error', { // 在标签的右括号之前要求或不允许换行
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/max-attributes-per-line': 0,
    'space-before-function-paren': 0,
    'vue/no-shared-component-data': 'warn', // 将组件的data属性强制为一个函数

    // 'vue/no-arrow-functions-in-watch':"error",
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-textarea-mustache': 'error', // 禁止<textarea>{{ message }}</textarea>，使用v-model代替。
    'comma-dangle': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
}
