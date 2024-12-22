import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs"; // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "如真如学如会",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    //索引2-6级标题 ##-######
    outline: [2, 6],
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", items: [{ text: "vue3", link: "/markdown-examples" }] },
    ],

    // sidebar: [
    //   {
    //     text: "演示",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "演示",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      copyright: "Copyright © 2024-present <NAME>",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});
