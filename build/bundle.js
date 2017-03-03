webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Gender = __webpack_require__(178);

	var _Gender2 = _interopRequireDefault(_Gender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_Gender2.default, null), document.getElementById('app'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _Canvas = __webpack_require__(179);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _gender = __webpack_require__(180);

	var _gender2 = _interopRequireDefault(_gender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextInput = function (_Component) {
	    _inherits(TextInput, _Component);

	    function TextInput(props) {
	        _classCallCheck(this, TextInput);

	        var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

	        _this.state = {
	            inputValue: '{"male":59,"female":41}'
	        };
	        return _this;
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
	            return _react2.default.createElement('input', { type: 'text', className: _gender2.default.input, onChange: this.handleInputChange.bind(this), ref: 'input' });
	        }
	    }]);

	    return TextInput;
	}(_react.Component);

	var Gender = function (_Component2) {
	    _inherits(Gender, _Component2);

	    function Gender(props) {
	        _classCallCheck(this, Gender);

	        var _this2 = _possibleConstructorReturn(this, (Gender.__proto__ || Object.getPrototypeOf(Gender)).call(this, props));

	        _this2.state = { "male": 59, "female": 41 };
	        return _this2;
	    }

	    _createClass(Gender, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var value = (0, _reactDom.findDOMNode)(this.refs.textInput).value;
	            try {
	                var obj = JSON.parse(value);
	            } catch (error) {
	                alert("请按格式输入数据！");
	                return false;
	            }
	            if (obj.male >= 0 && obj.female >= 0 && obj.male == parseInt(obj.male) && obj.female == parseInt(obj.female) && parseInt(obj.male) + parseInt(obj.female) == 100) {
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
	                { className: _gender2.default.gender },
	                _react2.default.createElement(
	                    'h1',
	                    { className: _gender2.default.title },
	                    '\u6027\u522B\u5360\u6BD4'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _gender2.default.tip },
	                    '\u8BF7\u6309\u683C\u5F0F\u8F93\u5165\u7537\u5973\u6BD4\u4F8B\uFF0C\u5982',
	                    '{"male":59,"female":41}',
	                    '\u3002\u5404\u9879\u503C\u5E94\u4E3A\u975E\u8D1F\u6574\u6570\uFF0C\u4E14\u76F8\u52A0\u7B49\u4E8E100\u3002'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(TextInput, { ref: 'textInput' }),
	                    _react2.default.createElement(
	                        'button',
	                        { className: _gender2.default.submit, onClick: this.handleClick.bind(this) },
	                        '\u786E\u5B9A'
	                    )
	                ),
	                _react2.default.createElement(_Canvas2.default, { data: this.state }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _gender2.default.footer },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _gender2.default.footMale },
	                        '\u7537 ',
	                        this.state.male,
	                        '%'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _gender2.default.footFemale },
	                        '\u5973 ',
	                        this.state.female,
	                        '%'
	                    )
	                )
	            );
	        }
	    }]);

	    return Gender;
	}(_react.Component);

	exports.default = Gender;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _gender = __webpack_require__(180);

	var _gender2 = _interopRequireDefault(_gender);

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
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            //若数据没发生变化，则不重绘
	            return nextProps.data.male != this.props.data.male;
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var context = (0, _reactDom.findDOMNode)(this).getContext('2d');
	            context.clearRect(0, 0, 1100, 600);
	            this.paint(context);
	        }

	        //绘制男性图标

	    }, {
	        key: 'paintMale',
	        value: function paintMale(ctx, x0, y0) {
	            ctx.save();
	            ctx.fillStyle = "#897fef";
	            ctx.beginPath();
	            ctx.arc(25 + x0, 8 + y0, 8, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.moveTo(8 + x0, 61 + y0);
	            ctx.arcTo(8 + x0, 19 + y0, 41 + x0, 19 + y0, 5);
	            ctx.arcTo(41 + x0, 19 + y0, 41 + x0, 61 + y0, 5);
	            ctx.lineTo(41 + x0, 61 + y0);
	            ctx.lineTo(36 + x0, 61 + y0);
	            ctx.lineTo(36 + x0, 29 + y0);
	            ctx.lineTo(33 + x0, 29 + y0);
	            ctx.arcTo(33 + x0, 99 + y0, 26 + x0, 99 + y0, 3);
	            ctx.arcTo(26 + x0, 99 + y0, 26 + x0, 56 + y0, 3);
	            ctx.lineTo(26 + x0, 56 + y0);
	            ctx.lineTo(23 + x0, 56 + y0);
	            ctx.arcTo(23 + x0, 99 + y0, 16 + x0, 99 + y0, 3);
	            ctx.arcTo(16 + x0, 99 + y0, 16 + x0, 29 + y0, 3);
	            ctx.lineTo(16 + x0, 29 + y0);
	            ctx.lineTo(13 + x0, 29 + y0);
	            ctx.lineTo(13 + x0, 61 + y0);
	            ctx.lineTo(8 + x0, 61 + y0);
	            ctx.fill();
	            ctx.restore();
	        }

	        //绘制女性图标

	    }, {
	        key: 'paintFemale',
	        value: function paintFemale(ctx, x0, y0) {
	            ctx.save();
	            ctx.fillStyle = "#82c99d";
	            ctx.beginPath();
	            ctx.arc(25 + x0, 8 + y0, 8, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.moveTo(4 + x0, 54 + y0);
	            ctx.arcTo(13 + x0, 19 + y0, 36 + x0, 19 + y0, 5);
	            ctx.arcTo(36 + x0, 19 + y0, 45 + x0, 54 + y0, 5);
	            ctx.lineTo(45 + x0, 54 + y0);
	            ctx.lineTo(42 + x0, 57 + y0);
	            ctx.lineTo(35 + x0, 26 + y0);
	            ctx.lineTo(32 + x0, 26 + y0);
	            ctx.lineTo(42 + x0, 71 + y0);
	            ctx.lineTo(32 + x0, 71 + y0);
	            ctx.arcTo(32 + x0, 99 + y0, 26 + x0, 99 + y0, 3);
	            ctx.arcTo(26 + x0, 99 + y0, 26 + x0, 71 + y0, 3);
	            ctx.lineTo(26 + x0, 71 + y0);
	            ctx.lineTo(23 + x0, 71 + y0);
	            ctx.arcTo(23 + x0, 99 + y0, 17 + x0, 99 + y0, 3);
	            ctx.arcTo(17 + x0, 99 + y0, 17 + x0, 71 + y0, 3);
	            ctx.lineTo(17 + x0, 71 + y0);
	            ctx.lineTo(7 + x0, 71 + y0);
	            ctx.lineTo(17 + x0, 26 + y0);
	            ctx.lineTo(14 + x0, 26 + y0);
	            ctx.lineTo(7 + x0, 57 + y0);
	            ctx.moveTo(4 + x0, 54 + y0);
	            ctx.fill();
	            ctx.restore();
	        }

	        //生成图表

	    }, {
	        key: 'paint',
	        value: function paint(ctx) {
	            var _this2 = this;

	            ctx.save();

	            //获取男性比例
	            var male = this.props.data.male;
	            var m5 = parseInt(male / 5);
	            var m1 = parseInt(male % 5);

	            //初始化计数器
	            var count = 20;

	            //先画出 m5 个整列的男性

	            var _loop = function _loop(j) {
	                var _loop5 = function _loop5(i) {
	                    //一列一列画
	                    count++;
	                    setTimeout(function () {
	                        return _this2.paintMale(ctx, j * 50, i * 120);
	                    }, 10 * count);
	                };

	                for (var i = 0; i < 5; i++) {
	                    _loop5(i);
	                }
	            };

	            for (var j = 0; j < m5; j++) {
	                _loop(j);
	            }

	            var _loop2 = function _loop2(i) {
	                //补全不足5个的男性
	                count++;
	                setTimeout(function () {
	                    return _this2.paintMale(ctx, m5 * 50, i * 120);
	                }, 10 * count);
	            };

	            for (var i = 0; i < m1; i++) {
	                _loop2(i);
	            }

	            //计算女性比例
	            var female = 100 - male;
	            var f5 = parseInt(female / 5);
	            var f1 = female % 5;

	            //中间的空隙
	            var x00 = f1 == 0 ? (m5 + 1) * 50 : (m5 + 2) * 50;
	            var y00 = m1 * 120;

	            //先画出不足5个的女性

	            var _loop3 = function _loop3(i) {
	                count++;
	                setTimeout(function () {
	                    return _this2.paintFemale(ctx, x00, y00 + i * 120);
	                }, 10 * count);
	            };

	            for (var i = 0; i < f1; i++) {
	                _loop3(i);
	            }

	            //补全女性
	            var x01 = f1 == 0 ? (m5 + 2) * 50 : (m5 + 3) * 50;

	            var _loop4 = function _loop4(j) {
	                var _loop6 = function _loop6(i) {
	                    count++;
	                    setTimeout(function () {
	                        return _this2.paintFemale(ctx, x01 + j * 50, i * 120);
	                    }, 10 * count);
	                };

	                for (var i = 0; i < 5; i++) {
	                    _loop6(i);
	                }
	            };

	            for (var j = 0; j < f5; j++) {
	                _loop4(j);
	            }
	            ctx.restore();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('canvas', { className: _gender2.default.canvas, width: 1100, height: 600 });
	        }
	    }]);

	    return Canvas;
	}(_react.Component);

	Canvas.propTypes = {
	    data: _react.PropTypes.object.isRequired
	};

	exports.default = Canvas;

/***/ },

/***/ 180:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"gender":"gender__gender-TPRr3","title":"gender__title-129rX","tip":"gender__tip-184Pt","input":"gender__input-2FpCT","submit":"gender__submit-FgfGx","canvas":"gender__canvas-3bYsa","footer":"gender__footer-3Cfzv","footMale":"gender__footMale-2O-qb","footFemale":"gender__footFemale-3QyM8"};

/***/ }

});