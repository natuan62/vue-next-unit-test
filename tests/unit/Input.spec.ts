import { mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import {Quasar, QInput} from "quasar";
import AntInput from "@/views/ant/Input.vue";
import HtmlInput from "@/views/html/Input.vue";
import QuasarInput from "@/views/quasar/Input.vue";

describe("Input", () => {
  test("renders Input with Ant", async () => {
    console.time("Ant Input");
    const wrapper = mount(AntInput, {
      global: {
        plugins: [Antd],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Ant Input");
    expect(true).toBe(true);
  });

  test("renders Input with HTML", async () => {
    console.time("Html Input");
    const wrapper = mount(HtmlInput);
    await wrapper.vm.$nextTick();
    console.timeEnd("Html Input");

    expect(true).toBe(true);
  });

  test("renders Input with Quasar", async () => {
    console.time("Quasar Input");
    const wrapper = mount(QuasarInput, {
      global: {
        plugins: [Quasar, QInput],
      },
    });
    await wrapper.vm.$nextTick();
    console.timeEnd("Quasar Input");

    expect(true).toBe(true);
  });
});