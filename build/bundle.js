webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(178);

	var _Home = __webpack_require__(233);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
	), document.getElementById('app'));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _home = __webpack_require__(234);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Canvas = function (_Component) {
	    _inherits(Canvas, _Component);

	    function Canvas() {
	        _classCallCheck(this, Canvas);

	        return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).apply(this, arguments));
	    }

	    _createClass(Canvas, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = (0, _reactDom.findDOMNode)(this).getContext('2d');
	            this.paint(context);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var context = (0, _reactDom.findDOMNode)(this).getContext('2d');
	            context.clearRect(0, 0, 600, 500);
	            this.paint(context);
	        }
	    }, {
	        key: 'paint',
	        value: function paint(ctx) {
	            ctx.save();

	            //男性颜色
	            ctx.fillStyle = "lightblue";
	            //获取男性数量
	            var male = this.props.data.male;
	            var m10 = parseInt(male / 10);
	            var m1 = male % 10;

	            //先画出 m10 个整列的男性
	            for (var j = 0; j < m10; j++) {
	                for (var i = 0; i < 10; i++) {
	                    //一列一列画
	                    ctx.fillRect(5 + j * 50, 5 + i * 50, 40, 40);
	                }
	                ctx.moveTo((j + 1) * 50, 0); //画完一列移动到下一列
	            }
	            for (var k = 0; k < m1; k++) {
	                //补全不足10个的男性
	                ctx.fillRect(5 + m10 * 50, 5 + k * 50, 40, 40);
	            }

	            //换成女性的颜色
	            ctx.fillStyle = 'pink';
	            //计算女性的比例
	            var female = 100 - male;
	            var f10 = parseInt(female / 10);
	            var f1 = female % 10;

	            //往右平移两列
	            if (f1 == 0) {
	                var x0 = (m10 + 1) * 50;
	            } else {
	                var x0 = (m10 + 2) * 50;
	            }
	            var y0 = m1 * 50;
	            //先画出不足10个的女性
	            for (var a = 0; a < f1; a++) {
	                ctx.fillRect(5 + x0, 5 + y0 + a * 50, 40, 40);
	            }
	            //移到下一列
	            if (f1 == 0) {
	                var z0 = (m10 + 2) * 50;
	            } else {
	                var z0 = (m10 + 3) * 50;
	            }
	            ctx.moveTo(z0, 0);
	            //补全女性
	            for (var b = 0; b < f10; b++) {
	                for (var c = 0; c < 10; c++) {
	                    //一列一列画
	                    ctx.fillRect(z0 + 5 + b * 50, 5 + c * 50, 40, 40);
	                }
	                ctx.moveTo(z0 + (b + 1) * 50, 0); //画完一列移动到下一列
	            }
	            ctx.restore();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('canvas', { className: _home2.default.canvas, width: 600, height: 500 });
	        }
	    }]);

	    return Canvas;
	}(_react.Component);

	var TextInput = function (_Component2) {
	    _inherits(TextInput, _Component2);

	    function TextInput(props) {
	        _classCallCheck(this, TextInput);

	        var _this2 = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

	        _this2.handleInputChange = _this2.handleInputChange.bind(_this2);
	        _this2.state = {
	            inputValue: '{"male":46,"female":54}'
	        };
	        return _this2;
	    }

	    _createClass(TextInput, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            (0, _reactDom.findDOMNode)(this.refs.input).value = this.state.inputValue;
	        }
	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(e) {
	            this.setState({
	                inputValue: e.target.value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('input', { type: 'text', onChange: this.handleInputChange, ref: 'input' });
	        }
	    }]);

	    return TextInput;
	}(_react.Component);

	var Home = function (_Component3) {
	    _inherits(Home, _Component3);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        var _this3 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	        _this3.state = { "male": 46, "female": 54 };
	        return _this3;
	    }

	    _createClass(Home, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var value = (0, _reactDom.findDOMNode)(this.refs.textInput).value;
	            try {
	                var obj = JSON.parse(value);
	            } catch (error) {
	                alert("请按格式输入数据！");
	            }
	            if (obj.male >= 0 && obj.female >= 0 && parseInt(obj.male) + parseInt(obj.female) == 100) {
	                this.setState(obj);
	            } else {
	                alert("请按格式输入数据！");
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.home },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u8BF7\u6309\u683C\u5F0F\u8F93\u5165\u7537\u5973\u6BD4\u4F8B\uFF0C\u5982',
	                    '{"male":46,"female":54}'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u5404\u9879\u503C\u5E94\u4E3A\u975E\u8D1F\u6574\u6570\uFF0C\u4E14\u76F8\u52A0\u7B49\u4E8E100\u3002'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(TextInput, { ref: 'textInput' }),
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.handleClick.bind(this) },
	                        '\u786E\u5B9A'
	                    )
	                ),
	                _react2.default.createElement(Canvas, { data: this.state })
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },

/***/ 234:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"home":"home__home-eoHdD","canvas":"home__canvas-2syko"};

/***/ }

});