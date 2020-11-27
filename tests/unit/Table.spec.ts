import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntTable from "@/views/ant/Table.vue";
import HtmlTable from "@/views/html/Table.vue";

describe("Table", () => {
  test("renders Table with Ant", async () => {
    console.time("Render Ant Table");
    const wrapper = mount(AntTable, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Ant Table");
    expect(true).toBe(true);
  });

  test("renders Table with HTML", async () => {
    console.time("Render Html Table");
    const wrapper = mount(HtmlTable);
    await wrapper.vm.$nextTick();
    console.timeEnd("Render Html Table");

    expect(true).toBe(true);
  });
});
