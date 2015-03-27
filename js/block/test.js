define(function(require, exports, module) {

var html = '';

html += '<div>xxx</div>';

exports.html = function (obj) {
	return G.titleHtml(obj) + html;
};

});