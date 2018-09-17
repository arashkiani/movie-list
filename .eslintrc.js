module.exports = {
	parser: "esprima",
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true
	},
	extends: [
		"eslint:recommended", 
		"plugin:flowtype/recommended",
		"prettier",
		"prettier/flowtype",
		"prettier/react",
    "prettier/standard"
	],
	parserOptions: {
		ecmaVersion: 9,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	},
	plugins: [
		"import", 
		"react", 
		"jest",
		"jsx-a11y", 
		"flowtype",
		"prettier",
		"standard",
		"compat"
	],
	settings: {
		flowtype: {
			onlyFilesWithFlowAnnotation: false
		}
	},
	rules: {
		"prettier/prettier": "error",
		"compat/compat": "error",
		"jsx-a11y/href-no-hash":"off",
		"react/no-unused-prop-types":"off",
		"react/jsx-filename-extension":"off",
		"react/prop-types":"off",
		"react/prefer-stateless-function": "warn",
		"react/require-default-props":"off",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": ["error"],
		"flowtype/use-flow-type": 1,
		"flowtype/valid-syntax": 2,
		"flowtype/no-types-missing-file-annotation": 1,
		"jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
		"no-console": "warn",
		"no-debugger": "warn"
	},
	"globals": {
		"fetch": true,
		"navigator": true,
		"__DEV__": true,
		"XMLHttpRequest": true,
		"React$Element": true,
		"Generator": true
	},
}