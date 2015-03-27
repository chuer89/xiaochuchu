define(function(require, exports, module) {

var html = '';

var tipsArr = [

'蓝天、可触摸云、彩林、雪山、水中倒影你我',

'天然水彩画',

'杀风景',

'合影',

'爱生活、爱摄影。。（摄影师不是我。。玩不起机子）',

'陪衬，还是喜欢背影，半边脸的耳发边角',

'依偎'
]

for (var i = 0; i < 7; i++) {
	html += '<div style="text-align: center;">';
	html += '<img data-src="'+G.imgSrc+'bipenggou/IMG_'+i+'.JPG" src="'+G.blankImg+'" width="800">';
	html += '</div>';

	html += '<div style="margin-bottom:15px;">'+tipsArr[i]+'</div>';
}

exports.html = function (obj) {
	return G.titleHtml(obj) + html;
};

});