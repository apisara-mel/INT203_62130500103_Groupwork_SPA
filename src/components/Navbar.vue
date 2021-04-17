<template>
    <header class="flex justify-between place-items-center">
        <div class="space-x-10">
        <router-link to="/" class="inline-block">Home</router-link>
        <router-link to="/about" class="inline-block">Profile</router-link>
        </div>
    </header>
</template>

<style scoped>
*{
    font-size: 22px;
    text-decoration: none;
    background-color: #83c5be;
    color: #006d77;
}
header{
    padding: 20px;
}
.image_full{
   display:block;
  }

 .image_mobile{
  display:none;
 }

@media (max-width: 1000px) and (min-width: 320px){
  .image_full{
   display:none;
  }

  .image_mobile{
   display:block;
  }
}
</style>