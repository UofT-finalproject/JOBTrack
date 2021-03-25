module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      }
};
