<template>
  <navbar />
  <header>Stock Manager</header>

  <body>
    <div class="contianer justify-center flex">
      <div
        class="stock-contianer justify-start max-w-lg rounded-md shadow-lg bg-red-100 px-8 py-10"
      >
        <div class="mb-8">
          <p>
            Item Name :
            <input
              class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
              type="text"
              placeholder="Plese enter your item name"
            />
          </p>
        </div>

        <div class="mb-8">
          <p>
            Price :
            <input
              class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
              type="text"
              placeholder="Item price"
            />
          </p>
        </div>

        <div class="mb-8">
          <p>
            Quantity :
            <input
              class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
              type="text"
              placeholder="Item quantities"
            />
          </p>
        </div>

        <div class="mb-8">
          <p>
            Description :
            <input
              class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
              type="text"
              placeholder="Description"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="bg-green-500 btn rounded-md ">
      <button>SUBMIT</button>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {},
  methods: {
    submitFrom() {},
  },
};
</script>

<style scoped>
header {
  font-size: 34px;
  font-family: "Courier New", Courier, monospace;
  color: #006d77;
  padding: 24px;
}
body {
  color: #e29578;
}

input {
  background-color: #ffffff;
  color: #e29578;
  padding: 1px;
}

button{
  color: #ffffff;
  padding: 2px;

}
</style>

