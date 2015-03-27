define(function(require, exports, module) {

require('./init.js');

var arr = G_article,
	html = '';

var $body = $('body');

if (window.screen.width > 1300) G.width = 1200;

html += '<div class="clearfix main" id="JS_main" style="width:'+G.width+'px;">';

for (var i = 0, iLen = 50; i < iLen; i++) {
	html += G.block(arr[i] || {});
}
html += '</div>';
$body.append(html);

var $box = $('.JS_box');
$.each($box, function () {
	var $this = $(this);
	// return
	setInterval( function () {
		var html = $this.children('.JS_bg:eq(0)').clone(true);
		$this.append(html);
		$this.children('.JS_bg:eq(1)').css({
			'background-color': G.randomBgColor(),
			'top': G.boxHeight
		}).animate({
			'top': 0
		}, 1000, function () {
			$this.children('.JS_bg:eq(0)').remove();
		})
	}, G.stepTime() );
});

$('#JS_main').on('click', '.JS_info', function () {
	var $this = $(this),
		block = $this.attr('data-block') || 'test',
		html = '',
		off = $this.offset(),
		$box = $this.siblings('.JS_bg:eq(0)'),
		style = '',
		offModuleFirst = $('.JS_info:eq(0)').offset(),
		url = 'block/'+block+'.js',
		index = $this.attr('data-index');

	style += 'left:'+off.left+'px;top:'+off.top+'px;'
			// + 'background-color:'+$box.css('background-color')+';'
			+ 'width:'+$box.css('width')+';'
			+ 'min-height:'+$box.css('height')+';'

	html += '<div class="article_box" id="JS_article_box" style="'+style+'"></div>';

	$('#JS_article_box').remove();

	$body.append(html);

	$('#JS_article_box').animate({
		width: G.width - 40,
		'min-height': $(window).height() - 20,
		left: offModuleFirst.left,
		top: 0
	}, function () {
		G.getAsyncModule(url, index);
	});

});


})