import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntSelect from "@/views/ant/Select.vue";
import HtmlSelect from "@/views/html/Select.vue";

describe("Select", () => {
  test("renders Select with Ant", async () => {
    console.time("Render Ant Select");
    const wrapper = mount(AntSelect, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Ant Select");
    expect(true).toBe(true);
  });

  test("renders Select with HTML", async () => {
    console.time("Render Html Select");
    const wrapper = mount(HtmlSelect);
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Html Select");

    expect(true).toBe(true);
  });
});
