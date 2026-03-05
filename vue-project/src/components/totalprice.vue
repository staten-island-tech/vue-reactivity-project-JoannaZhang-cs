<template>
    <div class="container">
        <TotalPrice v-for="price in toppings" :key = "topping.price" :price="price">{{ topping.price }}
          <button @click="addToCart(price)">Add to Cart</button>
        </TotalPrice>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>