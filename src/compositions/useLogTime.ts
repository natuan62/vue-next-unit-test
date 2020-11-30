import { onMounted, ref } from "vue";

const useLogTime = () => {
  const start = ref<number>(0),
    end = ref<number>(0),
    time = ref<number>(0);

  start.value = window.performance.now();

  onMounted(() => {
    end.value = window.performance.now();

    time.value = Math.round((end.value - start.value) * 100) / 100;
    console.log("time.value", time.value);
  });

  return {
    time,
  };
};

export default useLogTime;
