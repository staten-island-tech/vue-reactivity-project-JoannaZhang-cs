<template>
  <PizzaBase :selectedToppings="selectedToppings" />
  <div class="page">
    <div class="container">
      <ToppingCard v-for="topping in toppings" :key="topping.name" :topping="topping">
        <button @click="addToPizza(topping)">Add Topping</button>
      </ToppingCard>
      <!-- topping card makes a card for every topping -->
      <!-- left side is name/prop and right side is what you're passing in -->
    </div>
    <TotalPrice :toppings="selectedToppings" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
function addToPizza(topping) {
  /* if (!selectedToppings.value.includes(topping)) {
  if (!selectedToppings.value.some((t) => t.name === topping.name)) {
    selectedToppings.value.push(topping)
  }
  //function: if topping doesnt alr exist in selected toppings then push the topping to pizza - does this even work (how do i test selectedtoppings)
} */
  selectedToppings.value.push(topping)
}
import ToppingCard from '@/components/toppingcard.vue'
import PizzaBase from '@/components/pizzabase.vue'
import TotalPrice from '@/components/totalprice.vue'
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
  { name: 'broccoli', price: 30 },
  { name: 'crabmeat', price: 40 },
  { name: 'chicken', price: 50 },
  { name: 'ramen', price: 40 },
  { name: 'porkfloss', price: 40 },
]

const selectedToppings = ref([])
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
