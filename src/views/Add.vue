<template >
  <navbar />
  <!-- <header class="flex justify-center">Stock Manager</header> -->
  <div>
    <div class="contianer justify-center flex mt-20">
      <div
        class="stock-contianer justify-start max-w-lg rounded-md shadow-lg px-8 py-10"
        style="background-color: #ffddd2"
      >
        <form @submit.prevent="submitForm">
          <div class="mb-8">
            <p>
              Item Name :
              <input
                v-model="enteredName"
                class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
                type="text"
                placeholder="Enter Item name"
              />
            </p>
          </div>

          <div class="mb-8">
            <p>
              Price :
              <input
                v-model="price"
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
                v-model="quantity"
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
                v-model="description"
                class="ml-2 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded"
                type="text"
                placeholder="Description"
              />
            </p>
          </div>
        </form>
      </div>
    </div>

    <div class="flex justify-center my-20">
      <div class="inline">
        <button
          @click="addProduct"
          class="rounded-md py-2 px-5 mx-16"
          style="background-color: #dd2c2f"
        >
          SUBMIT
        </button>
      </div>
      <div class="inline">
        <button
          class="rounded-md py-4 px-5"
          style="background-color: #2ba84a"
        >
          <router-link to="/stock"> Go to Stock! </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
  },

  data() {
    return {
      enteredName: "",
      price: null,
      quantity: null,
      description: "",
      invaliNameInput: false,
      invaliPriceInput: false,
      invaliQuantityInput: false,
      invaliDescription: false,
      allProduct: [],
      url: "http://localhost:5000/allProduct",
      // isEdit: false,
      // editId: "",
    };
  },
  methods: {
    submitForm() {
      this.invaliNameInput = this.enteredName === "" ? true : false;
      this.invaliPriceInput = this.price === null ? true : false;
      this.invaliQuantityInput = this.quantity === null ? true : false;
      this.invaliDescription = this.description === "" ? true : false;

      this.addProduct();

      // console.log(`name value: ${this.enteredName}`);
      // console.log(`price value: ${this.price}`);
      // console.log(`invalid name: ${this.invaliNameInput}`);
      // console.log(`invalid price: ${this.invaliPriceInput}`);

      // if (this.enteredName !== "" && this.price !== null) {
      //   if (this.isEdit) {
      //     this.edtSurvey({
      //       id: this.editId,
      //       name: this.enteredName,
      //       price: this.price,
      //     });
      //   } else {
      //     this.addProduct({
      //       name: this.enteredName,
      //       price: this.price,
      //     });
      //   }
      // }
      this.enteredName = "";
      this.price = null;
    },

    async addProduct() {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: this.enteredName,
            price: this.price,
            quantity: this.quantity,
            description: this.description,
          }),
        });

        const data = await res.json();
        this.allProduct = [...this.allProduct, data];
        this.enteredName = "";
        this.price = null;
        this.quantity = null;
        this.description = "";
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },

    showData(show) {
      this.enteredName = show.name;
      this.price = show.price;
      this.quantity = show.quantity;
      this.description = show.description;
    },

    async getProduct() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
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

input {
  background-color: #ffffff;
  color: #006d77;
  padding: 1px;
}

button {
  color: #ffffff;
  padding: 4px;
}
div {
  color: #006d77;
}
</style>



