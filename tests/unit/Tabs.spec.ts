import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntTabs from "@/views/ant/Tabs.vue";
import HtmlTabs from "@/views/html/Tabs.vue";

describe("Tabs", () => {
  test("renders Tabs with Ant", async () => {
    console.time("Render Ant Tabs");
    const wrapper = mount(AntTabs, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Ant Tabs");
    expect(true).toBe(true);
  });

  test("renders Tabs with HTML", async () => {
    console.time("Render Html Tabs");
    const wrapper = mount(HtmlTabs);
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Html Tabs");

    expect(true).toBe(true);
  });
});
