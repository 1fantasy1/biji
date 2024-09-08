/*
import type { VNode } from "vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SocialLink",

  setup() {
    const discordLink = "https://discord.gg/PZTQfJ4GjX";
    const discordIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="width:1.25rem;height:1.25rem;vertical-align:middle"><path d='m534.42,126.58a1.57,1.57 0 0 0 -0.79,-0.73a507.33,507.33 0 0 0 -125.19,-38.81a1.9,1.9 0 0 0 -2.01,0.95a352.96,352.96 0 0 0 -15.58,32.01a468.41,468.41 0 0 0 -140.6,0a323.75,323.75 0 0 0 -15.82,-32.01a1.98,1.98 0 0 0 -2.02,-0.95a505.9,505.9 0 0 0 -125.19,38.81a1.79,1.79 0 0 0 -0.82,0.7c-79.73,119.07 -101.57,235.21 -90.86,349.9a2.11,2.11 0 0 0 0.81,1.44a510.06,510.06 0 0 0 153.56,77.6a1.99,1.99 0 0 0 2.15,-0.71a364.19,364.19 0 0 0 31.42,-51.08a1.95,1.95 0 0 0 -1.07,-2.71a335.92,335.92 0 0 1 -47.98,-22.85a1.98,1.98 0 0 1 -0.19,-3.27c3.22,-2.42 6.44,-4.93 9.53,-7.46a1.9,1.9 0 0 1 1.99,-0.27c100.65,45.94 209.61,45.94 309.07,0a1.89,1.89 0 0 1 2.01,0.24c3.09,2.54 6.31,5.07 9.55,7.49a1.97,1.97 0 0 1 -0.17,3.27a315.25,315.25 0 0 1 -48,22.83a1.97,1.97 0 0 0 -1.05,2.73a409.02,409.02 0 0 0 31.4,51.05a1.95,1.95 0 0 0 2.15,0.73a508.37,508.37 0 0 0 153.81,-77.59a1.97,1.97 0 0 0 0.81,-1.41c12.82,-132.61 -21.48,-247.79 -90.93,-349.9zm-315.91,280.03c-30.3,0 -55.27,-27.81 -55.27,-61.96s24.48,-61.96 55.27,-61.96c31.03,0 55.76,28.05 55.27,61.96c0,34.15 -24.48,61.96 -55.27,61.96zm204.35,0c-30.3,0 -55.27,-27.81 -55.27,-61.96s24.48,-61.96 55.27,-61.96c31.03,0 55.76,28.05 55.27,61.96c0,34.15 -24.23,61.96 -55.27,61.96z' fill="currentColor"/></svg>`;
    //const qqIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width:1.25rem;height:1.25rem;vertical-align:middle"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" fill="currentColor"/></svg>`;

    return (): VNode =>
      h(
        "div",
        { class: "vp-nav-item vp-action" },
        h("a", {
          class: "vp-action-link",
          href: discordLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "discord",
          innerHTML: discordIcon,
        })
      );
  },
});
*/
import type { VNode } from 'vue';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: "SocialLink",

  setup() {
    const bilibiliLink = "https://bilibili.com"; // 链接到的 Bilibili 页面
    const bilibiliIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024  1024" style="width:1.25rem;height:1.25rem;vertical-align:middle">
                           <path d="M512 90.1c-195.1 0-352.8 157.7-352.8 352.8s157.7 352.8 352.8 352.8 352.9-157.7 352.9-352.8-157.8-352.8-352.9-352.8zm0 688c-137.2 0-248-110.8-248-248s110.8-248 248-248 248 110.8 248 248-110.8 248-248 248zm229.2-544.6l-153.7 153.7 153.7 153.7-60.2 60.2-153.7-153.7-153.7 153.7-60.2-60.2 153.7-153.7-153.7-153.7 60.2-60.2 153.7 153.7 153.7-153.7z" fill="currentColor"/>
                         </svg>`;

    return (): VNode =>
      h(
        "div",
        { class: "vp-nav-item vp-action" },
        h("a", {
          class: "vp-action-link",
          href: bilibiliLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "bilibili",
          innerHTML: bilibiliIcon,
        })
      );
  },
});
