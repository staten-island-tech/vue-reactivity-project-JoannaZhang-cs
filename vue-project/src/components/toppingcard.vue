<template>
  <div class="toppingcard">
    <h1>{{ topping.name }}</h1>
    <h2>Price: {{ topping.price }}</h2>
    <button @click="" selectTopping>Add Topping</button>
  </div>
</template>

<script setup>
defineProps({
  topping: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add'])

function selectTopping() {
  emit('add', props.topping)
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 5px solid pink;
}
</style>
