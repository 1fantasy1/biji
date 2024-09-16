// import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  {
    text: "应用",
    icon: "fa6-solid:bars-staggered",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "常用扩展",
        icon: "fa6-brands:chrome",
        link: "apps/Chrome",
      },
      {
        text: "服务/专题",
        icon: "",
        prefix: "",
        children: [
          {
            text: "专题示例",
            icon: "fa6-solid:dice-d20",
            link: "apps/topic/",
          },
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "fa6-solid:bed-pulse",
    prefix: "/family/",
    children: ["Diet", "Coupon"],
  },
  {
    text: "工具",
    icon: "fa6-solid:toolbox",
    children: [
      {
        text: "ChatGPT SC",
        icon: "fa6-solid:bolt",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "fa6-solid:image", link: "https://prompt.newzone.top/" },
      { text: "多语言翻译", icon: "fa6-solid:language", link: "https://tools.newzone.top/json-translate" },
      {
        text: "工具收藏",
        icon: "fa6-solid:bars",
        link: "https://nav.newzone.top/",
      },
    ],
  },
  // 添加语言切换按钮
  {
    text: '简体中文',
    link: '/',
  },
  {
    text: 'English',
    link: '/en/',
  },
]);
