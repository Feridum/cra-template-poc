module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect",
    }
  }
};
