# 订阅阅读器测试

## 订阅阅读器

这是一个已完成的订阅阅读器项目。它会展示从四个信息源获取文章列表。

### 信息源列表

- [Udacity Blog](http://blog.udacity.com/feed)
- [CSS Tricks](http://feeds.feedburner.com/CssTricks)
- [HTML5 Rocks](http://feeds.feedburner.com/html5rocks)
- [Linear Digressions](http://feeds.feedburner.com/udacity-linear-digressions)

### 在线预览（可能需要代理）

[订阅阅读器](https://notbored.cc/udacity/feed-reader)

## 阅读器测试

### 已编写的测试套件

- 信息源列表
  - 列表不为空
  - 列表下每个信息源有`URL`属性
  - 列表下每个信息源有`name`属性
- 菜单按钮
  - 菜单元素默认是隐藏的
  - 菜单图标被点击时会切换可见状态
- 信息内容
  - 信息被正确返回和显示
- 切换信息源
  - 能够切换信息源，且信息内容会发生改变

### 测试结果

所有测试均通过，程序运行正常。

### 注意

请确保浏览器**隐私保护插件**和**广告拦截插件**不会拦截来自google的响应 *（当然，首先你要能够访问）*，如果有，请将其设置为允许，否则可能会导致某些测试不通过。
