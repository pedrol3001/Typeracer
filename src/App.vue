<template lang="pug">
  v-app
    v-main
      app-header
      app-drawer
      v-container(fluid)
        router-view
</template>

<script lang="ts">
import Vue from "vue";

import Header from "./components/Header.vue"
import Drawer from "./components/Drawer.vue"


interface navigationDTO{
  name: string;
  path:string;
}

export default Vue.extend({
  name: "App",

  components:{
    'app-header': Header,
    'app-drawer': Drawer,
  }

});
</script>


<style>

@font-face {
  font-family: "Crashnumberingserif";
  src: local("Crashnumberingserif"),
   url(./fonts/CrashNumbering/Crashnumberingserif-KVjW.ttf) format("truetype");
}

</style>
