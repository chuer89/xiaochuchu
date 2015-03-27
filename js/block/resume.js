define(function(require, exports, module) {

var html = '';

html += '<div class="relative">';
html += '<h3 style="border-bottom: 2px solid #ccc;">基本信息</h3>';
html += '<div>昵称：初 || 初帅 || 初儿</div>';
html += '<div>性别：男</div>';
html += '<div>email: 365197326@qq.com</div>';
html += '<div>学历/专业：本科/计算机技术与应用</div>';
html += '<div>Q群：193831773</div>';
html += '<div>工作履历：大四去了北京，待了近2年，现在一直在成都，一直从事web前端开发</div>';
html += '<div>职业规划：希望近几年专注前端，期望能进凝聚力很强的团队，像家一样的企业</div>';
html += '<div style="position:absolute;right:10px;top:30px;">';
html += '<img src="'+G.blankImg+'" width="140" height="160" data-src="'+G.imgSrc+'myself.png"></div>';
html += '</div>';

html += '<div style="margin-top: 20px;">';
html += '<h3 style="border-bottom: 2px solid #ccc;">专业技能</h3>';
html += '<div>+能较快解决、定位web浏览器界面兼容问题</div>';
html += '<div>+接触部分html5 api，熟悉css3</div>';
html += '<div>+熟悉原生js、jQuery，大致阅读jQ1.7、jQ1.9源码</div>';
html += '<div>+重视代码解耦，代码的规范、性能</div>';
html += '<div>+重视网站加载性能</div>';
html += '<div>+重视网站加载性能</div>';
html += '</div>';

html += '<div style="margin-top: 20px;">';
html += '<h3 style="border-bottom: 2px solid #ccc;">其他信息</h3>';
html += '<div>爱好：摄影、游泳、单车、看电影、徒步</div>';
html += '<div>学校表现：从小因为矮经常被欺负，因为家庭偏贫困较内向、自闭、朋友较少；';
html += '没新衣服穿，心情和情绪很沮丧，学习一直属于努力却没啥长进被老师评为：基因比较笨的孩子；';
html += '自尊心很强，因高中的暗恋促使我考大学的目的；自封大学寝室“光棍族族长”，因多名基友和本人受到南充妹子抛弃，';
html += '暗誓不再与南充妹子结交。';
html += '公共英语四级（作弊）；普通话话二甲（一直很自信声色）；每年至少挂一门，老师家访，';
html += '深情表示这门课真的很难寝室里面都挂了的；用cms独立重新做了校学生会和校团委网站，因此成了校学生会网络部部长；';
html += '大一、大二校外兼职较多，包括寒暑假，自己赚钱买了电脑还有新衣服；';
html += '</div>';
html += '</div>';

exports.html = function (obj) {
	return G.titleHtml(obj) + html;
};

})