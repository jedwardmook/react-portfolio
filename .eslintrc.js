module.exports = {
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "semi-style": process.env.NODE_ENV === 'production' ? 2: 1,
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 1,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 1,
    "no-unused-vars": process.env.NODE_ENV === 'production' ? 2 : 1,
    "indent": ["error", 2],
  "no-trailing-spaces": "error",
  "space-before-blocks": "error",
  "space-infix-ops": "error",
  "keyword-spacing": ["error", { "before": true, "after": true }],
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
