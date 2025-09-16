<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <div class="modal" v-if="modelValue">
        <slot />    
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$emit('update:modelValue', false)">Close Modal</button>
    </div>
</template>

<style scoped>
    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        background-color: beige;
        padding: 10px;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
</style>