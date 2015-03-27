G = {};

G.boxHeight = 200;

G.imgSrc = 'file:///Users/chu/Desktop/workfile/xiaochuchu/img/';
// G.imgSrc = '../../img/';

G.blankImg = G.imgSrc+'blank.jpg';

G.width = 1000;

G.randomColor = function () {
	return Math.floor(Math.random() * 255);
}

G.randomBgColor = function () {
	return 'rgb('+G.randomColor()+','+G.randomColor()+','+G.randomColor()+')';
}

G.randomSize = function () {
	return Math.floor(Math.random() * 250 + 150);
}

G.stepTime = function () {
	return Math.floor(Math.random() * 10 + 5) * 1000;
}

G.block = function (obj) {
	var html = '',
		info = obj || {};

	var bg = G.randomBgColor(),
		wid = G.randomSize() + 'px',
		hei = G.boxHeight + 'px';

	var style = 'width:'+wid+';height:'+hei+';background-color:'+bg+';';

	html += '<div class="box JS_box" style="width:'+wid+';height:'+hei+';">';
	html += '<div class="JS_bg bg" style="'+style+'"></div>';

	if (info.title) {
		html += '<a href="javascript:;" class="info JS_info" data-index="'+info.index+'" data-block="'+(info.block || '')+'" style="height:'+(G.boxHeight - 20)+'px;">';
		html += '<h2>'+(info.title || '无标题')+'</h2>';
		html += '<p>'+(info.introduction || '无内容')+'</p>';
		html += '</a>';
	}
	
	html += '</div>';

	return html;
}

G.seach = function (key) {
	var arr = G_article,
		rArr = [],
		$searchBox = $('#JS_search_box'),
		html = '';

	for (var i = 0, iLen = arr.length; i < iLen; i++) {
		if ( (new RegExp(key, 'g')).test(arr[i]['title']) || (new RegExp(key, 'g')).test(arr[i]['introduction']) ) {
			rArr.push(arr[i]);
			if (rArr.length > 10) break
		}
	}

	html += '<div class="search_select_box" id="JS_search_select">';
	if (rArr.length != 0) {
		for (var i = 0, iLen = rArr.length; i < iLen; i++) {
			html += '<a href="javascript:;" class="search_select" data-index="'+rArr[i].index+'" data-block="'+(rArr[i]['block'] || '')+'">';
			html += '<span>'+rArr[i]['title']+'</span><br/>';
			html += '<span class="intr text_ellipsis">'+rArr[i]['introduction']+'</span>';
			html += '</a>';
		}
	} else {
		html += '<span class="not_find">无相关内容</span>';
	}
	html += '</div>';

	$('#JS_search_select').remove();

	$searchBox.append(html);

	$('#JS_search_select').on('click', 'a', function () {
		var $this = $(this),
			block = $this.attr('data-block') || 'test',
			url = 'block/'+block+'.js',
			html = '',
			style = '';

		style += 'width:'+(G.width - 40)+'px;min-height:'+($(window).height() - 20)+'px;'
				+ 'margin: 0 auto;position: initial;'

		html += '<div class="article_box" id="JS_article_box" style="'+style+'"></div>';

		$('#JS_article_box,#JS_search_box').remove();

		$('body').append(html);

		G.getAsyncModule(url, $this.attr('data-index'));
	});
}

G.titleHtml = function (obj) {
	var html = '';

	html += '<a href="javascript:;" class="close_article" title="关闭文章" id="JS_close_article">X</a>';

	html += '<h1 class="title">'+obj.title+'</h1>';
	html += '<p>'+obj.introduction+'</p>';

	return html;
}

G.replaceImgSrc = function ($img) {
	var $img = $img || $('img'),
		img = '';

	$.each($img, function () {
		var $this = $(this),
			dSrc = $this.attr('data-src');

		if (dSrc) {
			img = new Image;
			img.src = dSrc;
			img.onload = function () {
				$this.attr('src', dSrc);
				$this.removeAttr('data-src');
			}
		}
	});
}