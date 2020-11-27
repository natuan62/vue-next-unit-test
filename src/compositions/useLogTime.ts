import { onMounted, ref } from 'vue';

const useLogTime = () => {
    const start = ref<number>(window.performance.now());
    const time = ref<number>(0);

    onMounted(() => {
        const end = ref<number>(window.performance.now());
        time.value = Math.round((end.value - start.value) * 100) / 100;
    });

    return {
        time,
    };
}

export default useLogTime;