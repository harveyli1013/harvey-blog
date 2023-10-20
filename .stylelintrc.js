module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-less",
    "stylelint-config-standard-vue",
    "stylelint-config-prettier",
  ],
  rules: {
    "alpha-value-notation": "number",
    "selector-class-pattern": null,
  },
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.(less|vue)"],
      /* 指定在代码上使用的自定义语法 */
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
      rules: {
        "keyframes-name-pattern": null,
      },
    },
  ],
};
