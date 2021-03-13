const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();
module.exports = {
  base: "/daily/",
  title: "每日快讯",
  host: "0.0.0.0",
  port: 8080,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "主站", link: "https://cn100800.tk" },
      { text: "mail", link: "mailto:freecracy1024@gmail.com" },
      { text: "google", link: "https://google.com.hk" },
    ],
    lastUpdated: "最后更新",
    sidebar,
  },
  plugins: [
    ["@vuepress/active-header-links"],
    ["@vuepress/back-to-top"],
    ["@vuepress/medium-zoom"],
    ["@vuepress/nprogress"],
    ["@vuepress/pwa"],
    ["vuepress-plugin-code-copy", true],
    [
      "qrcode",
      {
        labelText: "Mobile Read",
        size: "small",
      },
    ],
    [
      "vuepress-plugin-toolbar",
      {
        opts: [
          {
            icon: "",
            name: "文本展示",
            popover: {
              type: "text",
              title: "纯文本说明",
              text: "这是一个纯文本的内容展示，就是一段话",
            },
          },
        ],
      },
    ],
  ],
  head: [["meta", { name: "referrer", content: "no-referrer" }]],
  markdown: {
    lineNumbers: true,
  },
};
