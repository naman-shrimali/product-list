<template>
<div class="home-page">
  <v-flex color="primary">
      <h1>Go to Product Page....</h1>
        <v-btn id="start-btn" @click= "$router.push({name: 'Product_Card',params:{id:'pr1'}})">Click Me</v-btn>
  </v-flex>
  </div>
</template>

<script>
  export default {
        name: 'Home',  
  }
</script>

<style>
.home-page {
  display: flex;
  text-align: center;
  align-items: center;
  height: 100vh;
  
}
#start-btn {
  background-color:#d4a373;
}
</style>