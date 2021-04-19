<template>
  <navbar />

  <div>
    <div class="mt-16 justify-center flex">
      <img src="../../src/assets/png/logo.png" />
    </div>
    <div class="text-center mt-12">
      Product management system for selling products online, <br>you can inquire
      about products, prices and sales details here!
    </div>
    <div class="justify-center flex">
      <router-link to="/about">
        <button class="border-2 rounded-lg hover:border-transparent px-8 py-2 mx-12 my-16">
      Go to AddStock!
    </button>
      </router-link>
      
    </div>
    
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: 70px;
}
button{
  background-color: tomato;
  color: white;
}
</style>