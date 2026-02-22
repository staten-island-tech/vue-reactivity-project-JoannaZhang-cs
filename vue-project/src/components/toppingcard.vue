<template>
  <div class="toppingcard">
    <img :src="getToppingImage(topping.name)" :alt="topping.name" class="topping-image" />
    <h1>{{ topping.name }}</h1>
    <h2>Price: ${{ topping.price }}</h2>
    <button @click="selectTopping">Add Topping</button>
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
  console.log('button clicked, topping selected:', props.topping)
  emit('add', props.topping)
}

function getToppingImage(toppingName) {
  return `/toppings/${toppingName}.png`
  // return new URL(`../assets/${toppingName}.png`, import.meta.url).href
  //   try {
  //     return require(`@/assets/${toppingName}.png`)
  //   } catch (error) {
  //     console.error(`Image for ${toppingName} not found.`)
  //     return '' // Return an empty string or a placeholder image path
  //   }
}
</script>

<style scoped>
.toppingcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 5px solid pink;
}
.topping-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}
</style>
