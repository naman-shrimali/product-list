<template>
  <v-toolbar sm8 offset-sm2 md6 offset-md3 md4 offset-md4 flat fixed >
      <v-avatar class="right" @click= "$router.push({name: 'Home'})">
          <img :src='logo'/>
      </v-avatar>
      <v-spacer></v-spacer>
      <template v-if = "product_Detail.product_Promocode">
        <v-btn elevation="3" class="promocode_btn" outlined x-small @click = "promocode" >{{message_promo}}</v-btn>
      </template>
      <div v-else>
        <v-spacer></v-spacer>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon class="mr-1" color="blue-grey darken-4">mdi-lightbulb</v-icon>
      </v-btn>
      <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon color="yellow darken-5">mdi-lightbulb-outline</v-icon>
      </v-btn>
  </v-toolbar>
</template>

<script>
import image from '../assets/productTail.svg';

export default {
    props: ['product_Detail'],
    data() {
      return {
        logo: image,
        message_promo: "Promocode"
      }
    },
    methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    copyToClipboard(text) {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    },
    promocode() {
      if(this.message_promo=="Promocode")
      {
        this.message_promo = this.product_Detail.product_Promocode;
        this.copyToClipboard(this.product_Detail.product_Promocode);
      }
      else 
        this.message_promo = "Promocode";
    }
    }
}
</script>

<style>
.promocode_btn {
  background-color: "primary";
}
</style>