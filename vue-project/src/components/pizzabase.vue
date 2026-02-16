<template>
  <div class="pizza">
    <div v-for="topping in selectedToppings" :key="topping.name" class="topping">
      {{ topping.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  selectedToppings: Array,
})
</script>

<style scoped>
.pizza {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: rgb(225, 209, 128);
  position: relative;
  margin: 40px auto;
  border: 8px solid #c68642;
}

.topping {
  position: absolute;
  font-size: 12px;
  background: red;
  color: white;
  padding: 4px 6px;
  border-radius: 50%;
}
</style>
