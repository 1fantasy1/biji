import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "Fantasy的笔记",
  // 网站描述
  description: "开源工具、效率方法、心理学探索的自我提升笔记，记录并输出一切能让自己提升的知识。",

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

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板，https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: "./docs/.vuepress/templateBuild.html",

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: ["**/*.md", "!_temp", "!reading", "!.vuepress", "!node_modules"],

  plugins: [
    // 谷歌分析
    googleAnalyticsPlugin({
      // 设置你的 Analytics ID
      id: "G-TNSBFJP5ZD",
    }),
  ],
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
});
