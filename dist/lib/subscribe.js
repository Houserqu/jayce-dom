'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var subscribe = function subscribe(actions, jayce) {
  return function (WrappedComponent) {
    var Subscribe = function (_Component) {
      _inherits(Subscribe, _Component);

      function Subscribe() {
        _classCallCheck(this, Subscribe);

        return _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).apply(this, arguments));
      }

      _createClass(Subscribe, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          console.log('will mount');

          // 执行订阅操作
          jayce.subscribe('GET_NEW_ARTICLE');
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          console.log('componentWillUnmount');

          // 取消订阅
          jayce.unsubscribe('GET_NEW_ARTICLE');
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return Subscribe;
    }(_react.Component);

    return Subscribe;
  };
};

exports.default = subscribe;