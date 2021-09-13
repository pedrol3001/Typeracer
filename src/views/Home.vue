<template lang="pug">
  div
    v-container
      v-row
        v-col
          InfoCard(:number-value="speed" title="Wpm")
        v-col
          InfoCard(:number-value="words_pm" title="Mean")
        v-col
          InfoCard(:number-value="record" title="Record")
      v-row
        TypingBox(@correct_word="incCounter" @start="start" @finish="finish" @reset="reset")
</template>

<script lang="ts">
import Vue from "vue";
import InfoCard from "../components/InfoCard.vue";
import TypingBox from "../components/TypingBox.vue";

export default Vue.extend({
  name: "Home",

  data: () => ({
    timer_id: 0 as number,
    start_time: 0 as number,
    words_pm: "00,0" as string,
    speed_id: 0 as number,
    speed: "00,0" as string,
    record: "00,0" as string,
    word_counter: 0 as number,
  }),

  mounted () {
    if (localStorage.record) this.record = localStorage.record;
  },

  methods:{
    incCounter(){
      this.word_counter++;
    },
    start(){
      this.start_time = performance.now();

      this.timer_id = setInterval(()=>{
        const curr_time = performance.now();
        var time_diff = curr_time - this.start_time;
        this.words_pm = new Intl.NumberFormat("pt-BR",{minimumIntegerDigits: 2, minimumFractionDigits: 1, maximumFractionDigits: 1})
          .format(this.word_counter * 60000 / time_diff);
      }, 100);



      this.speed_id = setInterval(()=>{
        const words_begin = this.word_counter;
        setTimeout(()=>{
          const words_end = this.word_counter
          var words_diff = words_end - words_begin;
          this.speed = new Intl.NumberFormat("pt-BR",{minimumIntegerDigits: 2, minimumFractionDigits: 1, maximumFractionDigits: 1})
          .format(words_diff * 60000 / 5000);
        }, 5000);
      }, 250);



    },

    reset(){
      this.start_time= 0;
      this.words_pm=  "00,0";
      this.speed= "00,0";
      this.word_counter= 0 ;
    },
    finish(){

      console.log("teste")
      clearInterval(this.timer_id);
      clearInterval(this.speed_id);


      if(this.record < this.words_pm) {
        this.record = this.words_pm;
        localStorage.record = this.record
      }

      this.speed = "00,0";
    },
  },

  components: {
    TypingBox,
    InfoCard
  },
});
</script>
