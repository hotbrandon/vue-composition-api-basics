<script setup>
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

import { ref } from 'vue';
const showModal = ref(false);
const showDarkMode = ref(false);
</script>

<template>
    <h1>Modals</h1>
    <label class="block mb-4">
        <input type="checkbox" v-model="showDarkMode"> show dark mode?
    </label>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="showModal = true">Show Modal</button>
    <component :is="showDarkMode ? ModalDark : Modal" v-model="showModal">
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, 
            veritatis maiores tempora sint perferendis a in maxime, ratione 
            sed repudiandae pariatur possimus aspernatur aut non iusto quibusdam 
            eveniet, quos optio!</p>
        <p  class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, 
            veritatis maiores tempora sint perferendis a in maxime, ratione 
            sed repudiandae pariatur possimus aspernatur aut non iusto quibusdam 
            eveniet, quos optio!</p>
    </component>
    <p>some content here</p>
</template>
