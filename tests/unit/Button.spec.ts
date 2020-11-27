import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntButton from "@/views/ant/Button.vue";
import HtmlButton from "@/views/html/Button.vue";

describe("Button", () => {
  test("renders Button with Ant", async () => {
    console.time("Render Ant Button");
    const wrapper = mount(AntButton, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Ant Button");
    expect(true).toBe(true);
  });

  test("renders Button with HTML", async () => {
    console.time("Render Html Button");
    const wrapper = mount(HtmlButton);
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Html Button");

    expect(true).toBe(true);
  });
});
