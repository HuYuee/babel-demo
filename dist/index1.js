'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aa = function aa() {
    _classCallCheck(this, aa);

    this.type = 'aa';
};

var BB = function (_aa) {
    _inherits(BB, _aa);

    function BB() {
        _classCallCheck(this, BB);

        var _this = _possibleConstructorReturn(this, (BB.__proto__ || Object.getPrototypeOf(BB)).call(this));

        _this.type = 'bb';
        return _this;
    }

    return BB;
}(aa);