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
    // eslint-disable-next-line no-undef
    // "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
