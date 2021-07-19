const app = Vue.createApp({
    // template: '<h3>Template HTML Content</h3>'
    data(){
        return{
            showBooks: true,
            title: "Lord of the Rings",
            author: "J.R.R. Tolkein",
            counter: 40,
            x: 0,
            y: 0,
            lovelyFoods: [
                {name: 'ice cream sandwiches', rating: '5', url:'https://www.kingarthurbaking.com/recipes/chocolate-ice-cream-sandwiches-recipe', isFav: true},
                {name: 'ice cream cake', rating: '3', url:'lifeloveandsugar.com/copycat-dairy-queen-ice-cream-cake/',  isFav: false},
                {name: 'macaroons', rating: '5', url:'https://www.joyofbaking.com/frenchmacarons/MacaronsRecipe.html',  isFav: true},
            ]
        }
    },
    computed:{
        favFoods(){
            return this.lovelyFoods.filter((food) => food.isFav)
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        updateCoordinates(e){
            console.log('mousing over')
            this.x = e.offsetX,
            this.y = e.offsetY
        },
        toggleFav(food){
            food.isFav = !food.isFav
        }
    }
});

app.mount('#app')