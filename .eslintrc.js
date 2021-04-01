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
    // 忽略全局变量
    "globals": {
        "uni": true 
    },
    "rules": {
        "camelcase": 2,
        "curly": 2,
        "brace-style": [2, "1tbs"],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "space-infix-ops": 2,
        // 关闭tab的检测
        'no-tabs': 'off',
        'eqeqeq': 'off',
        'no-unreachable': 'off',
    }
}


//   // add your custom rules here
//   'rules': {
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//     "no-unused-vars": [2, { 
//       // 允许声明未使用变量
//       "vars": "local",
//       // 参数不检查
//       "args": "none" 
//     }],
//     // 关闭语句强制分号结尾
//     "semi": [0],
//     //key值前面是否要有空格
//      "key-spacing": [0, {
//       "singleLine": {
//         "beforeColon": false,
//         "afterColon": true
//       },
//       "multiLine": {
//         "beforeColon": true,
//         "afterColon": true,
//         "align": "colon"
//       }，
//     //空行最多不能超过100行
//     "no-multiple-empty-lines": [0, {"max": 100}],
//     //关闭禁止混用tab和空格
//     "no-mixed-spaces-and-tabs": [0],
//     //数组第一个指定是否启用这个规则，第二个指定几个空格
//     "indent":[1,2],
// }
