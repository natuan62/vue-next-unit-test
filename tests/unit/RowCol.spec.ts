import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import AntRowCol from "@/views/ant/RowCol.vue";
import HtmlRowCol from "@/views/html/RowCol.vue";

describe("RowCol", () => {
  // test("renders RowCol with Ant", async () => {
  //   console.time("Ant RowCol");
  //   const wrapper = mount(AntRowCol, {
  //     global: {
  //       plugins: [Antd],
  //     },
  //   });
  //   await wrapper.vm.$nextTick();
  //   console.timeEnd("Ant RowCol");
  //   expect(true).toBe(true);
  // });

  test("renders RowCol with HTML", async () => {
    console.time("Html RowCol");
    const wrapper = mount(HtmlRowCol);
    await wrapper.vm.$nextTick();
    console.timeEnd("Html RowCol");

    expect(true).toBe(true);
  });
});
