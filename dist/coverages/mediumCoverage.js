"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediumCoverage = function () {
	function MediumCoverage() {
		classCallCheck(this, MediumCoverage);
	}

	createClass(MediumCoverage, [{
		key: "getPrice",
		value: function getPrice(price, sell) {
			if (!price) return 0;

			return sell > 0 ? price - 1 : price - 2;
		}
	}]);

	return MediumCoverage;
}();

exports.default = MediumCoverage;