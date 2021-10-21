<template>
  <v-toolbar sm8 offset-sm2 md6 offset-md3 md4 offset-md4 flat fixed >
      <v-toolbar-title class="text-uppercase " @click= "$router.push({name: 'Home'})">
          <span class="font-weight-light green--text">Product</span>
          <span class="font-weight-dark blue--text">Tail</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar class="right" @click= "$router.push({name: 'Home'})">
          <img :src='logo'/>
      </v-avatar>
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
    data() {
      return {
        logo: image,
      }
    },
    methods: {
        toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
    }
}
</script>

<style>

</style>