<template>
  <h1>Reaction Test</h1>
  <button @click="start()" :disabled="this.isPlaying">Start Game</button>
  <Block :delay="this.delay"/>
</template>

<script>
import Block from'./components/Block.vue'

export default {
  name: 'App',
  components:{Block},
  data(){
    return{
      isPlaying: false,
      delay: null,
      score: 0,
      showResults: false
    }
  },
  methods: {
    start(){
      console.log('started game~')
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #444;
      margin-top: 60px;
    }
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }

  .block {
      width: 400px;
      border-radius: 20px;
      background:  #0faf87;;
      color: white;
      text-align: center;
      padding: 100px 0;
      margin: 40px auto;
    }

</style>
