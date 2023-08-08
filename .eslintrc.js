/* eslint-disable import/no-commonjs */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'next',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'no-duplicate-imports': 'error',
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'error',
        curly: 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-confusing-arrow': 'error',
        'no-div-regex': 'error',
        'no-empty': ['error', {
            allowEmptyCatch: true
        }],
        'no-eq-null': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unsafe-finally': 'error',
        'no-use-before-define': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'require-yield': 'error',
        'func-style': ['error', 'expression'],
        'new-parens': 'error',
        'no-alert': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-nested-ternary': 'error',
        'no-new-require': 'error',
        'no-unused-expressions': ['error', {
            allowShortCircuit: true
        }],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-rename': 'error',
        'no-undef-init': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-escape': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        yoda: 'error',
        'array-bracket-spacing': 'error',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true
        }],
        camelcase: ['error', {
            properties: 'never'
        }],
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'generator-star-spacing': 'error',
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-depth': ['error', {
            max: 5
        }],
        'max-len': ['error', {
            code: 200
        }],
        'max-nested-callbacks': ['error', {
            max: 3
        }],
        'max-statements-per-line': ['error', {
            max: 2
        }],
        'newline-per-chained-call': 'error',
        'no-multi-spaces': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': 'error',
        'operator-linebreak': ['error',
            'after',
            {
                overrides: {
                    '?': 'ignore',
                    ':': 'ignore'
                }
            }
        ],
        quotes: ['error', 'single', {
            allowTemplateLiterals: true
        }],
        'quote-props': ['error', 'as-needed'],
        'rest-spread-spacing': ['error', 'never'],
        semi: ['error', 'never'],
        'semi-spacing': 'error',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'template-curly-spacing': 'error',
        'unicode-bom': ['error', 'never'],
        'wrap-iife': 'error',
        'no-unused-vars': ['error',
            {
                varsIgnorePattern: '^(styles)$',
                argsIgnorePattern: '^(props|dispatch|state)|^(_\\||_)'
            }
        ],
        'linebreak-style': 0,
        'no-useless-constructor': 0,
        'yield-star-spacing': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'off',
        'import/no-amd': 'error',
        'import/no-commonjs': 'error',
        'react/no-render-return-value': 'error',
        'react/require-render-return': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': ['error', {
            ignore: ['PLP', 'PDP']
        }],
        'react/no-string-refs': 'error',
        'react/prefer-es6-class': 'error',
        'react/sort-prop-types': ['error', {
            callbacksLast: true,
            requiredFirst: true
        }],
        'react/self-closing-comp': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-tag-spacing': ['error', {
            beforeSelfClosing: 'always'
        }],
        'react/jsx-wrap-multilines': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/prefer-stateless-function': ['error', {
            ignorePureComponents: true
        }],
        'jsx-a11y/alt-text': ['error',
            {
                img: ['Image']
            }
        ],
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'no-prototype-builtins': 'off',
    }

}
