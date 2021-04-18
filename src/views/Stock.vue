<template>
  <navbar />

  <div class="h-screen">
    <div v-for="product in allProduct" :key="product.id">
      <p>
        {{ product.name }}
        <button @click="editProduct">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </p>

      <div v-if="isEdit">
        <form @submit.prevent="editSubmit(product)">
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
          <button type="submit">
            SUBMIT
          </button>
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

    editProduct() {
      this.isEdit = true;
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
    },
  },
  async created() {
    this.allProduct = await this.getProduct();
  },
};
</script>
