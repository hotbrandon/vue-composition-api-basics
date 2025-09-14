<script setup>
import { ref, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onUpdated } from 'vue'

const count = ref(0)
const step = ref(1)
const increase = () => {
  count.value += Number(step.value)
}
const decrease = () => {
  if (count.value > 0) 
    count.value-= step.value;
  else 
    count.value = 0

}

watch(count,(newVal, oldVal) => {
  console.log(`count changed from ${oldVal} to ${newVal}`);
})

const evenOrOdd = computed(() => {
  return count.value % 2 === 0 ? 'even' : 'odd'
})

onBeforeMount(() => {
  console.log('Component is about to be mounted');
})

onMounted(() => {
  console.log('Component has been mounted');
})

onBeforeUnmount(() => {
  console.log('Component is about to be unmounted');
})

onUnmounted(() => {
  console.log('Component has been unmounted');
})

onUpdated(() => {
  console.log('Component has been updated');
})

// directives
const vAutoFocus = {
  mounted: (el) => {
    el.focus();
  }
}
</script>

<template>
  <div>
    <h1 class="text-2xl text-blue-500">Home View</h1>
    <div class="flex gap-4 items-center justify-between w-1/2 mx-auto mt-4">
      <button @click="increase" type="button" class="text-white bg-green-700 hover:bg-green-800 px-5 py-2.5 rounded-lg">
        +
      </button>
      <span class="block">{{ count }}</span>
      <button @click="decrease" type="button" class="text-white bg-purple-700 hover:bg-purple-800 px-5 py-2.5 rounded-lg">
        -
      </button>
    </div>
    <div>
      <label for="step">increase / decrease by:</label>
      <input type="text" v-auto-focus id="step" name="step" v-model="step" class="border border-gray-300 rounded-lg px-3 py-2 mt-4 w-1/2 mx-auto block" placeholder="Type something..." />
    </div>
    <div>evenOrOdd: {{ evenOrOdd }}</div>
  </div>
</template>
