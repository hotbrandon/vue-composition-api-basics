import { ref, computed, watch } from 'vue'

export function useCounter() {
    const count = ref(0)
    const step = ref(1)
    const increase = () => {
        count.value += Number(step.value)
    }
    const decrease = () => {
        if (count.value > 0)
            count.value -= step.value;
        else
            count.value = 0

    }

    watch(count, (newVal, oldVal) => {
        console.log(`count changed from ${oldVal} to ${newVal}`);
    })

    const evenOrOdd = computed(() => {
        return count.value % 2 === 0 ? 'even' : 'odd'
    })

    return {
        count,
        step,
        increase,
        decrease,
        evenOrOdd
    }
}