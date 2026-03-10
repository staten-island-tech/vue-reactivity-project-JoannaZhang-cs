<template>
  <div class="cart">
    <div v-for="(topping, index) in toppings" :key="index" class="cart-item">
      {{ topping.name }} - ${{ topping.price }}
    </div>
    <h3>Total: ${{ total }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  toppings: Array,
    required: true,
})

const total
}

const totalPrice=
function totalPrice(){
  count.value++
}
function reset() {
count.value = 0
}
</script>

<style scoped></style>
