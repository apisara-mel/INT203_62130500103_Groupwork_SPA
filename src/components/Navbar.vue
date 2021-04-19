<template>
    <div class="grid grid-cols-3 p-4">
      <div class="">
        <router-link to="/">
          <img src="../../src/assets/png/logo.png" />
        </router-link>
      </div>

      <div class="col-start-2 col-end-2 justify-self-center space-x-44">
        <router-link to="/">Home</router-link>
        <router-link to="/stock">ItemsStock</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
</template>

<style scoped>
* {
  font-size: 20px;
  font-family: monospace;
  text-decoration: none;
  background-color: #83c5be;
  color: #006d77;
}
</style>