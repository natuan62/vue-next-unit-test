import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntButton from "@/views/ant/Button.vue";
import HtmlButton from "@/views/html/Button.vue";

describe("Button", () => {
  test("renders Button with Ant", async () => {
    console.time("Ant Button");
    const wrapper = mount(AntButton, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Ant Button");
    expect(true).toBe(true);
  });

  test("renders Button with HTML", async () => {
    console.time("Html Button");
    const wrapper = mount(HtmlButton);
    await wrapper.vm.$nextTick();
    console.timeEnd("Html Button");

    expect(true).toBe(true);
  });
});
