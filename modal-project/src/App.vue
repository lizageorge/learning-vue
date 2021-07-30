<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal" >
    <Modal :announcement="announcement" @closeModal="toggleModal">
      <h2>Announcement: </h2>
      <template v-slot:links>
        <a href="google.com">Google</a>
        <a href="bing.com">Bing</a>
      </template>
    </Modal>
  </div>
  <br>
  <button @click="toggleModal">show the modal!</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: "App",
  components: {Modal},
  data() {
    return {
      title: "my first vue app~",
      announcement: "don't forget to register for classes!",
      showModal : false
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: #502c2c;
}
</style>
