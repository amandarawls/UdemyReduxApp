module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
    },
    "settings": {
      "import/resolver": "webpack"
    },
    "plugins": [
      "wyze"
    ],
    "globals": {
      "document": true,
      "window": true,
      "localStorage": true
    },
    "rules": {
      "no-underscore-dangle": [
        2,
        {
          "allow": [
            "_id",
            "_rev"
          ]
        }
      ],
      "id-blacklist": 0,
      "max-len": [2, 120, 2, {
        "ignoreUrls": true,
        "ignoreComments": true
      }],
      "react/jsx-indent": [2, 2],
      "semi": ["error", "never"],
      "react/forbid-prop-types": 0,
      "react/prop-types": 0,
      "react/jsx-sort-props": [2, {
        "ignoreCase": false,
        "callbacksLast": false,
        "shorthandFirst": false
      }],
      "react/require-default-props": 0,
      "space-in-parens": 0,
      "wyze/space-around-conditional": 2,
      "wyze/func-params-spacing": 0,
      "wyze/max-file-length": 2,
      "wyze/sort-imports": 2,
      "import/extensions": "off",
      "import/first": 0,
      "import/prefer-default-export": 0,
      "import/no-extraneous-dependencies": "off",
      "import/no-named-as-default": "off",
      "max-statements": ["error", 20],
      "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1}],
      "newline-before-return": "error",
      "arrow-parens": ["error", "as-needed"],
      "no-confusing-arrow": "off",
      "prefer-spread": "error",
      "template-curly-spacing": ["error", "never"],
      "array-bracket-spacing": ["error", "always", { "objectsInArrays": false } ],
      "comma-dangle": ["error", "always-multiline"]
    },
    "overrides": [
      {
        "files": ["test/**", "**/*Spec.js", "**/*spec.js"],
        "globals": {
          "sinon": false,
          "expect": false,
          "should": false,
          "request": false,
          "describe": false,
          "it": false
        },
        "rules": {
          "max-len": 0,
          "no-unused-expressions": 0,
        }
      }
    ]
}
