const app = Vue.createApp({
    // template: '<h3>Template HTML Content</h3>'
    data(){
        return{
            showBooks: true,
            title: "Lord of the Rings",
            author: "J.R.R. Tolkein",
            counter: 40
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app')