<template>
  <navbar />
  <div class="h-screen grid grid-cols-2">
    <div class="mx-24 my-20 items-stretch">
      <div
        v-for="product in allProduct"
        :key="product.id"
        class="rounded-md border-2 mb-12 shadow-sm hover:shadow-lg px-8 py-8 grid grid-cols-2"
        style="background-color: #ffddd2"
      >
        <div>
          <p class="pl-10 text-left leading-loose">
            Product Name : {{ product.name }} <br />
            Price : {{ product.price }} <br />
            Quatity in stock : {{ product.quantity }} <br />
            Description : {{ product.description }} <br />
          </p>
        </div>
        <div class="self-center justify-self-end">
          <div class="mb-8">
            <button
              @click="editProduct(product)"
              class="border-2 rounded-lg hover:border-transparent px-8 py-2 mx-12"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              @click="deleteProduct(product.id)"
              class="border-2 rounded-lg hover:border-transparent px-6 py-2 mx-12"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isEdit"
      class="mx-24 my-20 rounded-md border-2 bg-pink-200 flex justify-center"
    >
      <div class="py-10">
        <form @submit.prevent="editSubmit(selectProduct)">
          <div class="mb-8">
            <p>
              Item Name :
              <input
                v-model="enteredName"
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
          <div class="flex justify-center">
           <button
            type="submit"
            class="border-2 rounded-lg hover:border-transparent px-6 py-2 mx-12"
          >
            SUBMIT
          </button> 
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  components: {},

  data() {
    return {
      allProduct: [],
      url: "http://localhost:5000/allProduct",
      enteredName: "",
      price: null,
      quantity: null,
      description: "",
      isEdit: false,
      selectProduct: null,
    };
  },

  methods: {
    async getProduct() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },

    async deleteProduct(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.allProduct = this.allProduct.filter(
              (product) => product.id !== id
            ))
          : alert("Error to delete product");
      }
    },

    editProduct(product) {
      this.isEdit = true;
      this.enteredName = product.name;
      this.price = product.price;
      this.quantity = product.quantity;
      this.description = product.description;

      this.selectProduct = product;
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.enteredName,
          price: this.price,
          quantity: this.quantity,
          description: this.description,
        }),
      });
      const data = await res.json();
      this.allProduct = this.allProduct.map((product) =>
        product.id === data.id
          ? {
              ...product,
              name: data.name,
              price: data.price,
              quantity: data.quantity,
              description: data.description,
            }
          : product
      );
      this.enteredName = "";
      this.price = null;
      this.quantity = null;
      this.description = "";
      this.isEdit = false;
      this.selectProduct = null;
    },
  },
  async created() {
    this.allProduct = await this.getProduct();
  },
};
</script>

<style scoped>
button {
  border-color: #de8564;
  background-color: #e29578;
  color: white;
}
button:hover {
  background-color: #da744f;
}
</style>
