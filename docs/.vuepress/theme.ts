//主题配置
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 主题选项：https://theme-hope.vuejs.press/zh/config/theme/layout.html
  hostname: "https://biji.675222.xyz",
  // 公用 CDN 在部分浏览器中可能无法正确显示图标。2024.07 开始，uBlock Origin 将拦截公有 CDN 的 js 请求。
  // https://icon-sets.iconify.design/
  iconAssets: "iconify",
  author: {
    name: "Fantasy",
    url: "https://biji.675222.xyz",
  },

  favicon: "/favicon.ico",
  logo: "/logo.svg",

  locales: {
    "/": {
      lang: "zh-CN",
      outlookLocales: {
        themeColor: "主题色",
        darkmode: "夜间模式",
        fullscreen: "全屏",
      },
      blogLocales: {
        article: "文章",
        articleList: "文章列表",
        category: "分类",
        tag: "标签",
        timeline: "时间轴",
        timelineTitle: "时间轴标题",
        all: "全部",
        intro: "个人介绍",
        star: "星标文章",
      },
      paginationLocales: {
        prev: "上一页",
        next: "下一页",
        navigate: "跳转到",
        action: "跳转",
        errorText: "无效的页码 (最大: $page)",
      },
      encryptLocales: {
        iconLabel: "加密",
        placeholder: "输入密码",
        remember: "记住密码",
        errorHint: "密码错误",
      },
      navbarLocales: {
        selectLangAriaLabel: "选择语言",
        langName: "中文",
      },
      metaLocales: {
        author: "作者",
        date: "日期",
        origin: "原创",
        views: "访问量",
        tag: "标签",
        category: "分类",
        readingTime: "阅读时间",
        words: "字数",
        toc: "目录",
        prev: "上一页",
        next: "下一页",
        lastUpdated: "最后更新",
        contributors: "贡献者",
        editLink: "编辑此页",
      },
      routeLocales: {
        skipToContent: "跳转到主要内容",
        notFoundTitle: "页面未找到",
        notFoundMsg: ["你查找的页面不存在。", "返回主页。"],
        home: "主页",
        back: "返回上一页",
        openInNewWindow: "在新窗口打开",
      },
    },
    "/en/": {
      lang: "en-US",
      outlookLocales: {
        themeColor: "Theme Color",
        darkmode: "Dark Mode",
        fullscreen: "Fullscreen",
      },
      blogLocales: {
        article: "Article",
        articleList: "Article List",
        category: "Category",
        tag: "Tag",
        timeline: "Timeline",
        timelineTitle: "Timeline Title",
        all: "All",
        intro: "Introduction",
        star: "Starred Articles",
      },
      paginationLocales: {
        prev: "Previous",
        next: "Next",
        navigate: "Go to",
        action: "Go",
        errorText: "Invalid page number (max: $page)",
      },
      encryptLocales: {
        iconLabel: "Encrypted",
        placeholder: "Enter the password",
        remember: "Remember me",
        errorHint: "Wrong password",
      },
      navbarLocales: {
        selectLangAriaLabel: "Select Language",
        langName: "English",
      },
      metaLocales: {
        author: "Author",
        date: "Date",
        origin: "Original",
        views: "Views",
        tag: "Tag",
        category: "Category",
        readingTime: "Reading Time",
        words: "Words",
        toc: "Table of Contents",
        prev: "Previous",
        next: "Next",
        lastUpdated: "Last Updated",
        contributors: "Contributors",
        editLink: "Edit this page",
      },
      routeLocales: {
        skipToContent: "Skip to content",
        notFoundTitle: "Page Not Found",
        notFoundMsg: ["The page you're looking for doesn't exist.", "Go back to home."],
        home: "Home",
        back: "Go back",
        openInNewWindow: "Open in a new window",
      },
    },
  },

  // 网站文章的版权声明
  license: "CC BY-NC-ND 4.0",

  // copyright 默认为 Copyright © <作者>
  copyright: `
  版权声明：自由转载 - 非商用 - 非衍生 - 保持署名<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">（创意共享 4.0 许可证）</a>|
  Copyright © 2023-present LearnData</a>`,

  displayFooter: true,
  // 页脚，支持使用 HTMLString 以显示备案信息等
  // footer: `CC BY-NC-ND 4.0 Licensed`,

  // 是否全局启用路径导航
  breadcrumb: false,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: false,

  // 深色模式配置
  darkmode: "switch",
  // 全屏按钮
  fullscreen: true,

  locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "1fantasy1/1fantasy1.github.io",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 文档存放路径
  docsDir: "docs",

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["SocialLink", "Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,
  // 侧边栏排序规则
  // sidebarSorter: ['readme', 'order', 'title'],

  // 页面布局 Frontmatter 配置：https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

  // 主题功能选项：https://theme-hope.vuejs.press/zh/config/theme/feature.html
  blog: {
    articleInfo: ["Date", "PageView", "Category", "Tag", "ReadingTime"],
    name: "沉积",
    avatar: "/neko.jpg",
    description: "给岁月以文明，而不是给文明以岁月",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/1fantasy1",
      Zhihu: "https://www.zhihu.com/people/58-25-67-58-68",
      少数派: { icon: "https://my-img.675222.xyz/fantasy-biji/2024/09/a5d74ca35a708b138cad858f56b0c310.svg", link: "https://sspai.com/u/fantasy_9928/posts" },
      Email: "https://biji.675222.xyz/mail.html",
    },
  },

  // 隐藏打印按钮
  // print: false,

  plugins: {
    blog: true,

    // 评论配置（仅做样例，记得更换）
    comment: {
      // 在本地运行 `pnpm docs:dev` 并使用非 localhost 域名时，容易出现 403 错误，移除本部分即可解决
      provider: "Waline",
      serverURL: "https://pinlun.675222.xyz",
      reaction: [
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44d.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44f.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f60e.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f602.png",
        "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f635-200d-1f4ab.png",
      ],
      // 部署 Waline：https://waline.js.org/guide/get-started.html
      pageview: true, // 浏览量统计
      locales: {
        "/": {
          // 表情互动提示文字
          reactionTitle: "已到达文章底部，欢迎留言、表情互动~",
          reaction0: "赞一个",
          reaction1: "支持下",
          reaction2: "有点酷",
          reaction3: "啥玩意",
          reaction4: "看不懂",
          // Waline 等级标签
          admin: "盛年不重来，一日难再晨",
          level0: "锻体",
          level1: "炼气",
          level2: "筑基",
          level3: "金丹",
          level4: "元婴",
          level5: "化神",
        },
      },
    },

    // 组件库
    components: {
      components: ["Badge", "BiliBili", "VidStack"],
    },

    // 禁用不需要的配置
    // https://plugin-md-enhance.vuejs.press/zh/guide/
    mdEnhance: {
      sub: true, // 上下角标
      sup: true,
      tasklist: true, // 任务列表
      figure: true, // 启用 figure
      imgLazyload: true, // 启用图片懒加载
      // imgMark: true, // 启用图片标记
      imgSize: true, // 启用图片大小
      include: true, //导入文件
      component: true, // 使用 component 代码块来在 Markdown 中添加组件
      footnote: true,
      // tabs: true, // 选项卡
      alert: true, // GFM 警告
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      hint: true, // 提示容器
      mark: true, // 使用 == == 进行标记。请注意两边需要有空格。
      align: true, // 启用自定义对齐
      // codetabs: true, // 代码块分组
      // demo: true, //代码演示
    },

    // Algolia 全文搜索：需要自己设置爬虫并生成下方配置，如不会自己设置，启用下方本地搜索
    /* 
    docsearch: {
      indexName: "newzone",
      appId: "M4EXXEZIEG",
      apiKey: "fd8891a9c4cc21e0ef4f11bf44f7a11e",
    },
    */

    // 本地搜索，和上方二选一
    searchPro: {
      // 索引全部内容
      indexContent: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      count: 10,
      sorter: (a, b) => Number(b.frontmatter.date) - Number(a.frontmatter.date),
    },
  },

  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,
});
