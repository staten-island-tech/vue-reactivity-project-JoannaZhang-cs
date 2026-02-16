<template>
  <div>
    <h1>{{ topping.name }}</h1>
    <h3>Price: {{ topping.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  topping: {
    type: Object,
    required: true,
  },
})
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
