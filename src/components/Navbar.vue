<template>
  <header class="justify-center">
      <div class="divide-x grid grid-cols-3">
        <div><router-link to="/" class="inline-block">Home</router-link></div>
        <div><router-link to="/stock" class="inline-block">Items Stock</router-link></div>
        <div><router-link to="/about" class="inline-block">About</router-link></div>
      </div>
  </header>
</template>

<style scoped>
*{
  font-size: 18px;
  font-family: monospace;
  text-decoration: none;
  background-color: #83c5be;
  color: #006d77;
}
header {
  padding: 12px;
}
</style>