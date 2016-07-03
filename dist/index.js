'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.translatorReducer = exports.translator = exports.changeLanguage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var changeLanguage = exports.changeLanguage = function changeLanguage(lang) {
	return {
		type: 'LANGUAGE_CHANGED',
		lang: lang
	};
};

var returnTranslation = function returnTranslation(labels, lang) {
	return Object.keys(labels).reduce(function (acc, key) {
		acc[key] = labels[key][lang];
		return acc;
	}, {});
};

var translator = exports.translator = function translator(labels) {
	return function (Component) {
		var Translator = function (_React$Component) {
			_inherits(Translator, _React$Component);

			function Translator() {
				_classCallCheck(this, Translator);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(Translator).apply(this, arguments));
			}

			_createClass(Translator, [{
				key: 'render',
				value: function render() {
					var props = returnTranslation(labels, this.props.lang);
					return _react2.default.cloneElement(_react2.default.createElement(Component, null), _extends({}, props, this.props));
				}
			}]);

			return Translator;
		}(_react2.default.Component);

		return (0, _reactRedux.connect)(function (state) {
			return { lang: state.lang };
		}, null)(Translator);
	};
};

var translatorReducer = exports.translatorReducer = function translatorReducer() {
	var defaultLang = arguments.length <= 0 || arguments[0] === undefined ? "en" : arguments[0];

	return function () {
		var state = arguments.length <= 0 || arguments[0] === undefined ? defaultLang : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'LANGUAGE_CHANGED':
				return action.lang;
			default:
				return state;
		}
	};
};
