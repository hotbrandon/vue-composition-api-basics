<script setup>
import { ref } from 'vue'

const count = ref(0)
const increase = () => {
  count.value++
}
const decrease = () => {
  if (count.value > 0) 
    count.value--;
  else 
    count.value = 0

}
</script>

<template>
  <div>
    <h1>Home View</h1>
    <div class="flex gap-4 items-center justify-between w-1/2 mx-auto mt-4">
      <button @click="increase" type="button" class="text-white bg-green-700 hover:bg-green-800 px-5 py-2.5 rounded-lg">
        +
      </button>
      <span class="block">{{ count }}</span>
      <button @click="decrease" type="button" class="text-white bg-purple-700 hover:bg-purple-800 px-5 py-2.5 rounded-lg">
        -
      </button>
    </div>
  </div>
</template>
