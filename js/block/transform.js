define(function(require, exports, module) {
	require('./../../css/block/transform.css');

	var html = '';

	html += '<div class="t_div"><a href="http://www.w3cplus.com/css3/css3-3d-transform.html" target="_blank">转载w3cplus</a></div>';
	html += '<div class="stage"><div class="container">';
	html += '<div class="side front">1</div><div class="side back">2</div><div class="side left">3</div><div class="side right">4</div>';
	html += '<div class="side top">5</div><div class="side bottom">6</div></div></div>';

	exports.html = function (obj) {
		return G.titleHtml(obj) + html;
	};

});