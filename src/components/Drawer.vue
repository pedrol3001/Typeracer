<template lang="pug">
    v-navigation-drawer(v-model="drawer" absolute temporary)
        v-list(nav)
            v-list-item-group.ma-4(v-model="group" v-for="nav in nav_items")
                router-link.text-decoration-none(:to="nav.path") {{nav.name}}
</template>

<script lang="ts">
  import Vue from "vue";


  interface navigationDTO{
    name: string;
    path: string;
  }

  export default Vue.extend({
    name: "Header",

    created() {
      this.$router.options.routes?.forEach(route => {
        this.nav_items.push({
          name: route?.name || "Missing Name",
          path: route.path
        })
      })
    },
    
    computed: {
      drawer: {
        get():boolean {
          return this.$store.state.drawer
        },
        set(value:boolean):void {
          this.$store.commit("toogle_drawer", value);
        }   
      } 
    },

    data: () => ({
      nav_items: [] as navigationDTO[],
      group: null,
    }),
  });
</script>
