<template>
    <div class = "container">
        <AnimalCard v-for="animal in animals" :key = "animal.name" :animal="animal">{{ animal.name }}</AnimalCard>
        <!-- animal card makes a card for every animal -->
         <!-- left side is name/prop and right side is what you're passing in -->


<!-- now u can see every animals name on the page -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PizzaBuilder from '@/components/PizzaBuilder.vue'
//don't need ref here because array isn't being updated
const toppings = ref([
  { name: 'sauce', price:  },
  { name: 'cheese', price:  },
  { name: 'mushroom',price: },
  { name: 'jalapeno',price: },
  { name: 'onion',price: },
  { name: 'pepperoni', price: },
  { name: 'pineapple', price:  },
  { name: 'redpepper', price: },
  { name: 'sausage', price:  },
  { name: 'salmon', price: },
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
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>