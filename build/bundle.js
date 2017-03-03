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

	var _SvgBox = __webpack_require__(238);

	var _SvgBox2 = _interopRequireDefault(_SvgBox);

	var _CanvasBox = __webpack_require__(241);

	var _CanvasBox2 = _interopRequireDefault(_CanvasBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _Home2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CanvasBox2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/svg', component: _SvgBox2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/canvas', component: _CanvasBox2.default })
	    )
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

	var _reactRouter = __webpack_require__(178);

	var _home = __webpack_require__(234);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	    _inherits(Home, _Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: _home2.default.link, to: '/svg' },
	                    'svg'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: _home2.default.link, to: '/canvas' },
	                    'canvas'
	                ),
	                this.props.children
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
	module.exports = {"link":"home__link-OsK9S"};

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _svgBox = __webpack_require__(239);

	var _svgBox2 = _interopRequireDefault(_svgBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MaleIcon = function (_Component) {
	    _inherits(MaleIcon, _Component);

	    function MaleIcon() {
	        _classCallCheck(this, MaleIcon);

	        return _possibleConstructorReturn(this, (MaleIcon.__proto__ || Object.getPrototypeOf(MaleIcon)).apply(this, arguments));
	    }

	    _createClass(MaleIcon, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'svg',
	                {
	                    className: 'icon',
	                    viewBox: '0 0 1024 1024',
	                    version: '1.1',
	                    xmlns: 'http://www.w3.org/2000/svg',
	                    xmlnsXlink: 'http://www.w3.org/1999/xlink',
	                    width: '50',
	                    height: '50' },
	                _react2.default.createElement(
	                    'defs',
	                    null,
	                    _react2.default.createElement('style', { type: 'text/css' })
	                ),
	                _react2.default.createElement('path', { d: 'M500.840067 0.014c53.579678-0.691996 82.164507 25.284848 92.126447 60.441637 8.744947 30.842815-3.29998 66.981598-18.776888 80.393517-16.770899 14.533913-32.817803 25.226848-64.545612 25.231849h-15.257908c-12.419925-4.506973-23.101861-11.566931-32.860803-18.186891-7.081957-4.806971-28.079831-26.481841-24.646852-33.450799-4.95197-1.60999-10.337938-33.530799-7.043958-45.773725 6.228963-23.139861 21.899868-49.765701 41.079754-59.267644L500.840067 0.014z m106.799359 311.597129v642.55114c0 19.297884 1.63699 40.805755-5.868965 52.812683-6.147963 9.844941-17.263896 11.62593-28.755827 16.432902-4.291974 1.791989-15.262908-1.029994-17.596895-1.75999-6.394962-1.989988-9.737942-1.007994-14.673912-3.519979-23.508859-11.957928-17.606894-55.279668-17.606894-90.371457l-0.584996-342.692942c-6.437961-0.160999-16.041904-0.938994-20.536877 1.169993 0.133999 95.753425-1.179993 196.313821-1.179993 293.994234v84.498493c0.005 13.653918 2.632984 26.249842-2.339986 36.964778-7.949952 17.113897-33.2998 27.349836-56.922658 19.366884-10.659936-3.593978-19.329884-13.29392-22.301866-22.881863-2.659984-8.599948 0.203999-15.750905-1.75999-26.995838l-0.589996-125.578246-0.579996-533.990792c-5.293968 0.101999-7.552955 1.222993-11.73793 2.343985v288.12627c-8.905947 12.714924-16.6039 37.151777-45.768725 28.749827-35.225788-10.139939-25.235848-71.803569-25.235849-116.189302V330.980012c0-66.922598-5.134969-110.256338 41.66375-132.032207 22.371866-10.407937 58.746647-7.629954 90.957454-7.629954h99.756401c25.703846 0 53.966676-0.389998 72.765563 4.109975 16.415901 3.932976 33.031802 16.121903 41.073753 28.756828 17.537895 27.537835 10.563937 111.429331 10.563937 157.263055v175.450946c0 33.643798 2.982982 61.412631-19.95288 72.174567-6.147963 2.885983-19.865881 2.359986-25.815845 0-25.269848-10.02194-22.892863-33.766797-22.886863-68.655588l-0.589996-248.805505H607.639426z', fill: '#897fef' })
	            );
	        }
	    }]);

	    return MaleIcon;
	}(_react.Component);

	var FemaleIcon = function (_Component2) {
	    _inherits(FemaleIcon, _Component2);

	    function FemaleIcon() {
	        _classCallCheck(this, FemaleIcon);

	        return _possibleConstructorReturn(this, (FemaleIcon.__proto__ || Object.getPrototypeOf(FemaleIcon)).apply(this, arguments));
	    }

	    _createClass(FemaleIcon, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'svg',
	                {
	                    className: 'icon',
	                    viewBox: '0 0 1024 1024',
	                    version: '1.1',
	                    xmlns: 'http://www.w3.org/2000/svg',
	                    xmlnsXlink: 'http://www.w3.org/1999/xlink',
	                    width: '50',
	                    height: '50' },
	                _react2.default.createElement(
	                    'defs',
	                    null,
	                    _react2.default.createElement('style', { type: 'text/css' })
	                ),
	                _react2.default.createElement('path', { d: 'M428.69001 189.217978h125.556985c23.092997 0 49.679994-2.082 66.607992 4.712999 9.249999 3.71 19.275998 12.334999 24.757997 20.044998 27.805997 39.073995 9.287999 123.733985 18.271998 182.139979l0.593 37.729995 44.209995 94.305989c6.699999 14.984998 26.966997 50.139994 4.126999 61.894993-27.489997 14.151998-42.607995-36.707996-50.695994-52.461994l-43.029995-83.69999-7.072999-121.430986c-3.25-20.896998-0.19-44.354995-11.791998-55.995993l-1.174 0.587c-0.145 44.266995-1.766 92.873989-1.766 139.701983v58.361993l48.329994 111.404987 48.928995 111.404987c3.615 8.403999 19.079998 35.281996 17.678998 43.029995h-80.759991c-10.006999 0-26.461997-2.303-34.184996 1.18v218.688974c0 34.517996-0.58 53.187994-27.697997 60.714993-3.596 0.997-12.933998 3.741-18.864998 1.767-12.176999-4.051-21.766997-8.094999-27.117996-18.864998-7.419999-14.940998-4.126-40.733995-4.126-61.894992V809.329905c0-11.312999 2.227-64.103992-1.18-67.787992h-15.911998v219.275974c0 33.590996-1.054 53.723994-27.704997 60.714993-3.564 0.934-12.384999 3.685-18.277997 1.767-10.163999-3.306-20.063998-6.006999-25.344998-14.145998-8.731999-13.469998-6.485999-39.262995-6.485999-61.301993V759.813911c0-5.489999 1.451-15.722998-1.766-18.271998l-113.758986-1.18 116.117986-266.439969-0.593-111.989986c0-26.682997 3.893-59.459993-2.352999-82.526991l-1.767 1.18-8.258999 22.984997-4.713 80.166991-3.532999 70.733992-41.263996 80.16699c-9.116999 15.627998-23.072997 67.989992-50.694994 56.001994-28.000997-12.157999 3.722-64.474992 11.198999-80.759991l35.369996-74.859991 0.587-39.496995c9.166999-58.449993-8.914999-141.299983 18.271998-181.546979 7.431999-11.002999 20.738998-19.229998 35.369996-22.990997l15.912998-1.767zM508.859 0c55.862993 0.953 102.204988 54.922994 74.859992 113.177987-11.589999 24.694997-33.962996 40.303995-65.427993 45.389994-54.430994 8.787999-101.391988-53.213994-81.34699-106.691987 8.473999-22.606997 27.029997-40.335995 50.102994-48.335994L508.858 0z', fill: '#82c99d' })
	            );
	        }
	    }]);

	    return FemaleIcon;
	}(_react.Component);

	var SvgBox = function (_Component3) {
	    _inherits(SvgBox, _Component3);

	    function SvgBox() {
	        _classCallCheck(this, SvgBox);

	        return _possibleConstructorReturn(this, (SvgBox.__proto__ || Object.getPrototypeOf(SvgBox)).apply(this, arguments));
	    }

	    _createClass(SvgBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(MaleIcon, null),
	                _react2.default.createElement(FemaleIcon, null)
	            );
	        }
	    }]);

	    return SvgBox;
	}(_react.Component);

	exports.default = SvgBox;

/***/ },

/***/ 239:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _canvasBox = __webpack_require__(242);

	var _canvasBox2 = _interopRequireDefault(_canvasBox);

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
	            context.clearRect(0, 0, 1100, 600);
	            this.paint(context);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var context = (0, _reactDom.findDOMNode)(this).getContext('2d');
	            context.clearRect(0, 0, 1100, 600);
	        }
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
	    }, {
	        key: 'paint',
	        value: function paint(ctx) {
	            ctx.save();

	            //获取男性比例
	            var male = this.props.data.male;
	            var m5 = parseInt(male / 5);
	            var m1 = parseInt(male % 5);

	            //先画出 m5 个整列的男性
	            for (var j = 0; j < m5; j++) {
	                for (var i = 0; i < 5; i++) {
	                    //一列一列画
	                    this.paintMale(ctx, j * 50, i * 120);
	                }
	            }
	            for (var k = 0; k < m1; k++) {
	                //补全不足5个的男性
	                this.paintMale(ctx, m5 * 50, k * 120);
	            }

	            //计算女性比例
	            var female = 100 - male;
	            var f5 = parseInt(female / 5);
	            var f1 = female % 5;

	            //往右平移两列
	            if (f1 == 0) {
	                var x00 = (m5 + 1) * 50;
	            } else {
	                var x00 = (m5 + 2) * 50;
	            }
	            var y00 = m1 * 120;

	            //先画出不足5个的女性
	            for (var a = 0; a < f1; a++) {
	                this.paintFemale(ctx, x00, y00 + a * 120);
	            }
	            //移到下一列
	            if (f1 == 0) {
	                var z0 = (m5 + 2) * 50;
	            } else {
	                var z0 = (m5 + 3) * 50;
	            }
	            //补全女性
	            for (var b = 0; b < f5; b++) {
	                for (var c = 0; c < 5; c++) {
	                    //一列一列画
	                    this.paintFemale(ctx, z0 + b * 50, c * 120);
	                }
	            }
	            ctx.restore();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('canvas', { className: _canvasBox2.default.canvas, width: 1100, height: 600 });
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
	            inputValue: '{"male":59,"female":41}'
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

	var CanvasBox = function (_Component3) {
	    _inherits(CanvasBox, _Component3);

	    function CanvasBox(props) {
	        _classCallCheck(this, CanvasBox);

	        var _this3 = _possibleConstructorReturn(this, (CanvasBox.__proto__ || Object.getPrototypeOf(CanvasBox)).call(this, props));

	        _this3.state = { "male": 59, "female": 41 };
	        return _this3;
	    }

	    _createClass(CanvasBox, [{
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
	                { className: _canvasBox2.default.canvasBox },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '\u6027\u522B\u5360\u6BD4'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u8BF7\u6309\u683C\u5F0F\u8F93\u5165\u7537\u5973\u6BD4\u4F8B\uFF0C\u5982',
	                    '{"male":59,"female":41}'
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
	                _react2.default.createElement(Canvas, { data: this.state }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _canvasBox2.default.footer },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u7537'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u5973'
	                    )
	                )
	            );
	        }
	    }]);

	    return CanvasBox;
	}(_react.Component);

	exports.default = CanvasBox;

/***/ },

/***/ 242:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"canvasBox":"canvasBox__canvasBox-OcjqV","canvas":"canvasBox__canvas-8ObeH","footer":"canvasBox__footer-3AQl1"};

/***/ }

});