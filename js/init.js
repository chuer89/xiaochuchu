define(function(require, exports, module) {

require('./bin/jquery-1.11.1.min.js');
require('./common.js');
require('./articleConfig.js');

var boolHtml = '';
boolHtml += '<a id="JS_to_top" class="to_top btn" href="javascript:;" style="background-color:'+(G.randomBgColor())+';display:none;">置顶</a>';
boolHtml += '<a id="JS_search_btn" class="search_btn btn" href="javascript:;" style="background-color:'+(G.randomBgColor())+';">搜索</a>';
boolHtml += '<a id="JS_to_home" class="btn" href="javascript:;" style="background-color:'+(G.randomBgColor())+';display:none;">主页</a>';
$('#JS_bool').append(boolHtml);

var $body = $('body'),
	$toTop = $('#JS_to_top');

$(document).on('scroll', function () {
	if ($body.scrollTop() > 500) {
		$('#JS_to_top').show();
	} else {
		$('#JS_to_top').hide();
	}
}).on('click', function (e) {
	var $this = $(e.target);
	if ($this.closest('div').length && !$this.hasClass('bg_r')) return false;
	$('#JS_to_home').click();
})

$('#JS_to_top').on('click', function () {
	$body.scrollTop(0);
});

$('#JS_to_home').on('click', function () {
	$('#JS_main').show();
	$(this).hide();
	$('#JS_article_box').remove();
	$body.scrollTop(0);
});

$('#JS_search_btn').on('click', function () {
	var html = '';
	html += '<div id="JS_search_box" class="search_box">';
	html += '<div class="search_val_box" id="JS_search_val_box">';
	html += '<input type="text" class="search_val" id="JS_search_val" autofocus placeholder="搜索关键词">';
	html += '</div>';
	html += '</div>';
	$('#JS_search_box').remove();
	$body.append(html);
});

$body.on('keyup', '#JS_search_val', function (e) {
	G.seach( $.trim( $(this).val() ) );
}).on('keydown', '#JS_search_val', function (e) {
	if (e.keyCode == 27) $('#JS_search_box').remove();
}).on('click', '#JS_close_article', function () {
	$('#JS_to_home').click();
})

G.getAsyncModule = function (url, index) {
	if (!url) return
	require.async(url, function (b) {
		$('#JS_main').hide();
		$('#JS_article_box').html(b.html(G_article[index]));
		G.replaceImgSrc();
		$('#JS_to_home').show();
	});
}

for (var i = 0, ii = G_article.length; i < ii; i++) {
	G_article[i]['index'] = i;
}

});