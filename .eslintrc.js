module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [
    {
      files: ["*.js"], // Aplica essa configuração apenas a arquivos com extensão .js
      rules: {
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".js", ".jsx"] },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
  },
};
