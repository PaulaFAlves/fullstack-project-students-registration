<template>
  <v-app class="grey">
  <Navbar />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

  <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default {
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
} 
</style>
