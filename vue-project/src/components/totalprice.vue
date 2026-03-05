<template>
    <div class="container">
        <TotalPrice v-for="price in toppings" :key = "topping.price" :price="price">{{ topping.price }}
          <button @click="addToCart(price)">Add to Cart</button>
        </TotalPrice>
    </div>

</template>

<script setup>
defineProps({
  prices: {
    type: Array,
    required: true,
  },
})

function addToCart(price) {

}

const totalPrice= 
function totalPrice(){
  count.value++ 
}
function reset() {
count.value = 0
}

</script>


<style scoped>

</style>