<h1 align="center" style="font-size: 32px">
  <a href="https://gan.tootal.xyz/" style="text-decoration: none">
    <ruby>章<rt>g</rt></ruby>
    <ruby>又<rt>à</rt></ruby>
    <ruby>贡<rt>n</rt></ruby>
  </a>
</h1>

## 章又贡是什么？

“章又贡”是赣字的拆解，同时作为本站的网站名。网站主要用于介绍我的家乡“赣州”，开发此网站的目的是在实践中学习Web技术。目前网站包含以下版块：

* **首页**，主要采用轮播图方式展示赣州地区的风景图，下方采用卡片布局的方式列出了一些关于赣州的视频。
* **论坛**，使用前端方式模拟了一个简单的论坛。论坛可以发帖、回帖、删除，所有内容均保存在浏览器端。论坛内预先随机生成了一些帖子和回复的内容。
* **位置**，调用百度地图API，在地图上绘制出了赣州的轮廓，直观地展现了赣州的地理位置。
* **经济**，参考了赣州市政府提供的《赣州市2019年国民经济和社会发展统计公报》，展现了近期赣州的经济发展状况。
* **文化**，从源远流长的江南宋城、客家人的摇篮、人民共和国的摇篮等多个角度展现了赣州的文化发展进程。
* **历史**，按照时间顺序，从秦朝到中华人民共和国，详细介绍了赣州的建置沿革。
* **关于**，包含网站的基本介绍，开发文档、开发记录、以及一些测试工具等。

此外网站还提供以下功能：

* 用户登录、注册。包含表单校验、用户界面展示等功能。
* 阅读位置记录。在论坛帖子详细内容页面，网站会自动记录当前阅读进度，在刷新页面、前进后退等情况下可以恢复当前进度。
* 移动端适配。网站同时支持PC端和移动端的访问。在窄屏条件下，网站会将菜单自动放置在弹出层，方便移动端的使用。
* 网站访问量统计。调用百度统计API对网站的访问进行统计，同时在关于页面展示。
* 完善的前端路由。在没有后台服务器的支持情况下实现了完整的前端路由导航，可直接通过网址访问对应的版块页面。
* 多种访问方式。本网站目前部署在Github Page上，域名为https://gan.tootal.xyz。同时网站文件支持直接在本地打开访问（部分功能需要联网）

## 开发文档
本站所使用的前端框架为[Vue](https://cn.vuejs.org/)，布局采用[Element](https://element.eleme.cn/)组件库，网站部署在[Github Page](https://gan.tootal.xyz/)上。



### 依赖
* [Vue.js](https://cn.vuejs.org/) (MIT)
* [Vue Router](https://router.vuejs.org/zh/) (MIT)
* [Vue Baidu Map](https://dafrok.github.io/vue-baidu-map/#/zh/index) (MIT)
* [Element](https://element.eleme.cn/#/zh-CN) (MIT)

此外，网站开发过程中参考了部分[Bootstrap的样式代码](https://github.com/twbs/bootstrap/tree/main/scss)，设计布局时参考了[百度](https://www.baidu.com/s?wd=baidu)、[知乎](https://www.zhihu.com/)、[MCBBS](https://www.mcbbs.net/forum.php)、[Vue Forum](https://forum.vuejs.org/)等网站的设计。
