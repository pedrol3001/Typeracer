<template lang="pug">
  v-card.pa-1.ma-4(width="100%") 
    v-card-subtitle.ma-8
      span.green--text.mr-1 {{typed_words}}
      span.mr-1.accent-1.text-decoration-underline(:class="{red: wrong_word}") {{current_word}}
      span.mr-1 {{not_typed_words}}
    
      v-text-field.my-6(:disabled="finish" v-model="typed_string" height="2rem" :placeholder="current_word" @input="onKeyboardTiping")
    
      v-progress-linear(
        :value="progress"
        :color="color"
        absolute
        height="2rem"
      )
    v-card-actions.d-flex.justify-center
      v-btn.green(@click="start") START

</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "TypingBox",
  
    data: () => ({
      slogan: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        .split(' ') as string[],
      word_index: 0 as number,
      typed_string: "" as string,
      wrong_word: false as boolean,
    }),

    computed:{

      finish(){
          var finish = (this.word_index * 100 / (this.slogan.length)) == 100;
          if(finish) this.$emit("finish");
          return finish
      },

      typed_words(): string{
        return this.slogan.slice(0, this.word_index ).join(" ");
      },
      not_typed_words():string {
        return this.slogan.slice(this.word_index + 1, this.slogan.length).join(" ");
      },
      current_word():string {
        return this.slogan[this.word_index];
      },

      progress ():number {
        const progress = this.word_index * 100 / (this.slogan.length);
        return progress;
      },

      color():string {
        const progress = this.word_index * 100 / (this.slogan.length);
        return ['error', 'warning', 'success'][Math.floor(progress / 30)]
      },
    },

    methods:{

      start(){
        this.word_index = 0;
        this.$emit('reset');
      },
      onKeyboardTiping(){

        if(this.word_index == 0 && this.typed_string === this.current_word[0]){
          this.$emit('start');
        }

        if(this.current_word + (this.not_typed_words.length == 0 ? '' : ' ') === this.typed_string){

          this.typed_string = '';
          this.$emit('correct_word');
          this.word_index++;
          
        }

        if(this.typed_string == "" || this.current_word.includes(this.typed_string)) this.wrong_word = false;
        else this.wrong_word = true;
      }
    }
  });
</script>