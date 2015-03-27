define(function(require, exports, module) {

var html = '';

var tipsArr = [
'看见第一排那么美女没，我一直观察，留意呀。'
+'我的肠子呀，因为她走的太慢，我跟朋友先走了，后面发现另外一个狼盯上了。而且成功了。。。',

'只有登山杖，路太滑，眼睛一会就开始痛了，边走边打雪仗。',

'其实我一直想说，我有手套，因为要照相所以摘了。',

'雅玛的。。。',

'这吊丝用这像粑粑一样的雪球里面裹着4个小西红柿，一直从山上拿到山下，两小时后，我们实在受不了就帮他解决了。。',

'喜欢这种感觉。。那个另外登山杖是我的',

'他自愿在里面受虐，理由就是得到一张照片。。',

'喜欢这种感觉',

'四人合影，三男是同事，一女是老资格驴友，我之前不认识，现在也没联系过。。号码都没。'
]

for (var i = 0; i < 9; i++) {
	html += '<div style="text-align: center;">';
	html += '<img data-src="'+G.imgSrc+'huilonggou/IMG_'+i+'.JPG" src="'+G.blankImg+'" width="800">';
	html += '</div>';

	html += '<div style="margin-bottom:15px;">'+tipsArr[i]+'</div>';
}

exports.html = function (obj) {
	return G.titleHtml(obj) + html;
};

});