<template>
  <div class="block" v-show="showBlock" @click="endTimer()">
    Click Me!
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: "Block",
    props: ['delay'],
    mounted(){
        setTimeout(()=>{
            this.showBlock = true,
            this.startTimer()
        },this.delay)
    },
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    method:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        endTimer() {
            console.log(reactionTime)
        }
    }
}
</script>

<style>

</style>