if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function () {
	'use strict';

	return {
		baz: function (str) {
			return str + ' baz';
		}
	};

});