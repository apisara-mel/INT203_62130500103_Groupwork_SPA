<template>
  <navbar />
  <header>
    Stock Manager
  </header>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
header{
  font-size: 34px;
  font-family: 'Courier New', Courier, monospace;
  color: #006d77;
  padding: 24px;

}
</style>

