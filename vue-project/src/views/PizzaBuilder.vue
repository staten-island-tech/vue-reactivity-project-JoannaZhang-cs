<template>
  <PizzaBase :selectedToppings="selectedToppings" />

  <div class="container">
    <ToppingCard
      v-for="topping in toppings"
      :key="topping.name"
      :topping="topping">{{topping.name}}
      <button @click="addToPizza">Add Topping</button>
    </ToppingCard>
      <!-- topping card makes a card for every topping -->
    <!-- left side is name/prop and right side is what you're passing in -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
function addToPizza(topping) {
  if (!selectedToppings.value.includes(topping)) {
  if (!selectedToppings.value.some((t) => t.name === topping.name)) {
    selectedToppings.value.push(topping)
  }
}
}
import ToppingCard from '@/components/toppingcard.vue'
import PizzaBase from '@/components/pizzabase.vue'
//don't need ref here because array isn't being updated
const toppings = [
  { name: 'sauce', price: 20 },
  { name: 'cheese', price: 30 },
  { name: 'mushroom', price: 40 },
  { name: 'jalapeno', price: 40 },
  { name: 'onion', price: 40 },
  { name: 'pepperoni', price: 40 },
  { name: 'pineapple', price: 40 },
  { name: 'redpepper', price: 40 },
  { name: 'sausage', price: 50 },
  { name: 'salmon', price: 50 },
]

const selectedToppings = ref([

])


</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
/* .card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
} */
</style>
