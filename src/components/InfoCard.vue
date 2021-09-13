<template lang="pug"> 
  v-card.pa-1.justify-center.d-flex.flex-column.align-center
    v-card-title {{title}}
    v-card-subtitle.ma-4.number {{numberValue}}
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "InfoCard",
    props:[
      'numberValue',
      'title'
    ]

  });
</script>


<style scoped>

  .number{
    font-family: "Crashnumberingserif", Helvetica, Arial;
    font-size: 5rem;
  }

</style>