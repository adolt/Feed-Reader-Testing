/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */
$(
  (function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
     */
    describe("RSS Feeds", function() {
      /* 
       * 保证 allFeeds 变量被定义了而且不是空的。
       */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /*
       * 保证 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
       */
      it("every feed has a property 'url' and is not empty", function() {
        allFeeds.forEach(feed => {
          expect(feed.url).toBeDefined();
          expect(feed.url).not.toBeNull();
          expect(feed.url).not.toEqual("");
        });
      });

      /*
       * 保证 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
       */
      it("every feed has a property 'name' and is not empty", function() {
        allFeeds.forEach(feed => {
          expect(feed.name).toBeDefined();
          expect(feed.name).not.toBeNull();
          expect(feed.name).not.toEqual("");
        });
      });
    });

    /* 针对 菜单按钮 的测试用例 */
    describe("The menu", function() {
      /*
       * 保证菜单元素默认是隐藏的。
       */
      it("should be hidden by default", function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });

      /*
       * 保证当菜单图标被点击的时候菜单会切换可见状态。
       */
      it("could toggle by click event", function() {
        const menuIcon = $(".menu-icon-link");
        menuIcon.click();
        expect($("body").hasClass("menu-hidden")).toBe(false);
        menuIcon.click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    /* 针对 Feed内容 的测试用例 */
    describe("Initial Entries", function() {
      /* 
       * 保证 loadFeed 函数被调用，且内容被正确加载
       * 增加 timeout 时间防止 Google API 加载过慢
       */
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it("should have feeds", function(done) {
        expect($(".entry")).not.toBeNull();
        done();
      });

      /* 恢复默认timeout值 */
      afterAll(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
      });
    });

    /* 针对 切换Feed内容 的测试用例 */
    describe("New Feed Selection", function() {
      /* 创建两个变量用来保存两次 loadFeed 后的结果 */
      let content0 = null,
        content1 = null;

      /* 在运行 spec 前得到两次 loadFeed 的结果 */
      beforeEach(function(done) {
        loadFeed(0, function() {
          content0 = $(".feed").html();
          if (content0 && content1) {
            done();
          }
        });
        loadFeed(1, function() {
          content1 = $(".feed").html();
          if (content0 && content1) {
            done();
          }
        });
      });

      /*
       * 保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
       */
      it("should have different feeds content", function(done) {
        expect(content0).not.toEqual(content1);
        done();
      });
    });
  })()
);
