<template>
  <header>
    <div>
      <div class="inline justify-sart">
        <router-link to="/">
        <img src="../../src/assets/png/logo.png" class="inline"/>
        </router-link>
      </div>
        <div class="inline space-x-28 justify-center">
          <router-link to="/">Home</router-link>
          <router-link to="/stock">Items Stock</router-link>
          <router-link to="/about">About</router-link>
        </div>
    </div>
  </header>
</template>

<style scoped>
* {
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