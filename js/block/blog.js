define(function(require, exports, module) {

var html = '';

var styleTips = 'background-color: #49483e;border-radius: 10px;padding: 10px;font-size: 14px;margin: 20px 0;';

html += '<p>为什么要做这么坑的博客，不连数据库，后端语言都没有不算，只有js去生成的dom，那就叫网页吧，只有js的网页。<br>';
html += '吐槽：我去，只有js，你是搞开发的么，那百度的那些爬虫怎么找到你的文章和关键词，你就一个主页的title可以爬。';
html += '</p>';

html += '<p>会用简单的php，就是不想弄，我还给了自己很充分的理由，因为我不想那么规矩的去展示每个页面，';
html += '我想随心所欲的展示每个可以和值得分享的东西，每个文章有唯一的js去生成的dom。';
html += '如果要用后端语言，对于博客数据库当然就简单了，但是对于每个文章的维护和开发就没有这个只有js的粗暴简单了。</p>';

html += '<div style="'+styleTips+'">';
html += '<div>站点定位：</div>';
html += '<div>高富帅点的想法是，分享自己觉得有意义的东西；吊丝真实想法，就是装高端，提高下知名度，什么有私活呀，有猎头挖我呀。。。</div>';
html += '</div>';

html += '<div style="'+styleTips+'">';
html += '<div>站点使用说明：</div>';
html += '<div>`有文字的变色块块都可以点，就输入该文章的详情了。</div>';
html += '<div>`在详情里，千万不能点浏览器的回退，在右侧有个小小的fixed的假按钮，主页就是回去</div>';
html += '<div>`右侧的按钮中还有个搜索，只能搜索本站的标题和简介哟</div>';
html += '<div>`其他，还在想。。。</div>';
html += '</div>';

html += '<div style="'+styleTips+'">';
html += '<div>站点技术：</div>';
html += '<div>`主页的每个块都是随机生成的颜色和宽度</div>';
html += '<div>`并且块还在随机的滚动随机的颜色</div>';
html += '<div>`插件的话，有jq2.x、seajs</div>';
html += '<div>ps：随机块块和随机颜色，这不是我装高端，是因为没美工，我又不想像别的博客那么规矩</div>';
html += '</div>';

exports.html = function (obj) {
	return G.titleHtml(obj) + html;
};

});