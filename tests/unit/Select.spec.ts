import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntSelect from "@/views/ant/Select.vue";
import HtmlSelect from "@/views/html/Select.vue";

describe("Select", () => {
  test("renders Select with Ant", async () => {
    console.time("Ant Select");
    const wrapper = mount(AntSelect, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Ant Select");
    expect(true).toBe(true);
  });

  test("renders Select with HTML", async () => {
    console.time("Html Select");
    const wrapper = mount(HtmlSelect);
    await wrapper.vm.$nextTick();
    console.timeEnd("Html Select");

    expect(true).toBe(true);
  });
});
