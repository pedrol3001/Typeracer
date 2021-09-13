<template lang="pug">
  v-app-bar(app color="primary" dark)
      v-app-bar-nav-icon(@click.stop="toogleDrawer")
      v-toolbar-title Typeracer
      v-spacer
      v-btn(icon)
          v-icon mdi-dots-vertical
</template>

<script lang="ts">
  import Vue from "vue";
  import { mapActions } from "vuex";

  export default Vue.extend({
    name: "Header",


    methods:{
      ...mapActions({
        toogleDrawer: 'toogle_drawer'
      })
    },
  });
</script>
