<template>
  <navbar />

  <div class="flex justify-center my-20">
    <input
      class="p-1 ml-2 text-black placeholder-gray-500 placeholder-opacity-50 rounded w-80 focus:outline-none"
      type="text"
      placeholder="Please enter text for searching product"
      v-model="search"
    />
    <button class="p-1 ml-2 bg-green-500 rounded-lg focus:outline-none">
      Cancel
    </button>
  </div>

  <div class="grid grid-cols-2">
    <div class="items-stretch mx-24">
      <div
        v-for="product in searchproduct"
        :key="product.id"
        class="grid grid-cols-2 px-8 py-8 mb-12 border-2 rounded-md shadow-sm hover:shadow-lg"
        style="background-color: #ffddd2"
      >
        <div>
          <p class="pl-10 leading-loose text-left">
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
              class="px-8 py-2 mx-12 border-2 rounded-lg hover:border-transparent"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              @click="deleteProduct(product.id)"
              class="px-6 py-2 mx-12 border-2 rounded-lg hover:border-transparent"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isEdit"
      class="flex items-center justify-center mx-24 my-20 border-2 rounded-md"
      style="background-color: #ffddd2"
    >
      <div class="py-10">
        <form @submit.prevent="editSubmit(selectProduct)">
          <div class="mb-8">
            <p>
              Item Name :
              <input
                v-model="enteredName"
                class="ml-2 placeholder-gray-500 placeholder-opacity-50 rounded w-80 focus:outline-none"
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
                class="ml-2 placeholder-gray-500 placeholder-opacity-50 rounded w-80 focus:outline-none"
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
                class="ml-2 placeholder-gray-500 placeholder-opacity-50 rounded w-80 focus:outline-none"
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
                class="ml-2 placeholder-gray-500 placeholder-opacity-50 rounded w-80 focus:outline-none"
                type="text"
                placeholder="Description"
              />
            </p>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="px-6 py-2 mx-12 border-2 rounded-lg hover:border-transparent"
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
      search: "",
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

    // search(search){
    //   this.searchProduct = search;
    // }
  },

  async created() {
    this.allProduct = await this.getProduct();
  },

  computed: {
    searchproduct(){
      return this.allProduct.filter((showResult) => {
                return showResult.name.toLowerCase().includes(this.search.toLowerCase())
            })
    }
  }

  
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
p {
  color: #006d77;
}
</style>
