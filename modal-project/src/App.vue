<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :text="announcement" @closeModal="toggleModal">
      <h2>Announcement:</h2>
      <template v-slot:links>
        <a href="google.com">Google</a>
        <a href="bing.com">Bing</a>
      </template>
    </Modal>
  </div>

  <div v-if="showModal2">
    <!-- challenge! -->
    <Modal :text="reminder" @closeModal="toggleModal2"> 
      <h2>Reminder:</h2>
    </Modal>
  </div>

  <br />
  <button @click="toggleModal">show the modal!</button>
  <button @click="toggleModal2">show the second modal~</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "my first vue app~",
      announcement: "school starts in two weeks~",
      reminder: "don't forget to register for classes!",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
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
h1 {
  color: #502c2c;
}
</style>
