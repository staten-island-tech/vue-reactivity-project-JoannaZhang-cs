<template>
  <div class="pizza-base">
    <h1>Pizza Builder</h1>

    <div class="toppings">
      <div v-for="(topping, index) in selectedToppings" :key="index" class="topping-item">
        <img
          :src="getToppingImage(topping.name)"
          :alt="topping.name"
          class="topping-image"
          :style="{ zIndex: index + 2 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  selectedToppings: {
    type: Array,
    required: true,
  },
})

function getToppingImage(toppingName) {
  return `/toppings/${toppingName}.png`
}
</script>

<style scoped>
.pizza-base {
  /* need to import photo of pizza dough */
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: rgb(225, 209, 128);
  position: relative;
  margin: 40px auto;
  border: 8px solid #c68642;
}

.topping-item {
  position: absolute;
  font-size: 12px;
  background: red;
  color: white;
  padding: 4px 6px;
  border-radius: 50%;
}

.toppings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.topping-image {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.pizza-base {
  z-index: 1;
}

.sauce {
  z-index: 2;
}

.cheese {
  z-index: 3;
}

.mushroom {
  z-index: 4;
}

.jalapeno {
  z-index: 5;
}

.onion {
  z-index: 6;
}

.pepperoni {
  z-index: 7;
}

.pineapple {
  z-index: 8;
}

.redpepper {
  z-index: 9;
}

.sausage {
  z-index: 10;
}

.salmon {
  z-index: 11;
}
</style>
