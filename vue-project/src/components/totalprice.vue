<template>
  <h2>Cart</h2>
  <div class="cart">
    <div v-for="(topping, index) in toppings" :key="index" class="cart-item">
      {{ topping.name }} - ${{ topping.price }}
    </div>
    <h3>Total: ${{ total }}</h3>
  </div>
</template>

<script setup>
<<<<<<< Updated upstream
import { ref, computed } from 'vue'

const props = defineProps({
  toppings: Array,
  required: true,
=======

defineProps({
  prices: {
    type: Array,
    required: true,
  },
>>>>>>> Stashed changes
})

const total = computed(() => {
  return props.toppings.reduce((sum, topping) => {
    return sum + topping.price
  }, 0)
})
// const totalPrice=
// function totalPrice(){
//   count.value++
// }
// function reset() {
// count.value = 0
// }
</script>

<style scoped>
.cart {
  width: 250px;
  border-left: 2px solid #ccc;
  padding: 20px;
}

.cart-item {
  margin-bottom: 8px;
}
</style>
