webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navigation = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        'Hello react !!!!'
    ),
    _react2.default.createElement(_navigation.Navigation, null)
);

_reactDom2.default.render(Component, document.getElementById('app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = exports.Navigation = function Navigation() {
    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Home'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Gallery'
            )
        )
    );
};

/***/ })

},[15]);
//# sourceMappingURL=main.js.map