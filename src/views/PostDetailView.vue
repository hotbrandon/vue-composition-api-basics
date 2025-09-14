<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

console.log(route.params.id);

const goBackHome = () => {
  router.push({ name: 'home' });
}
</script>

<template>
  <div>
    <h1 class="text-2xl text-blue-500">Post Detail View</h1>
    <p>{{ $route.params.id }}</p>
    <p @click="goBackHome" class="cursor-pointer text-blue-500 hover:underline">Go Back Home</p>
  </div>
</template>