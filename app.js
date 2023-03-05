const app = Vue.createApp({
    // template: '<h2>Second header!</h2>'
    data() {
        return {
            showValues: true,
            title: 'value',
            age: 35,
            x: 0,
            y: 0,

            showBooks: true,
            books: [
                {title: 'the empire', author: 'sisco puig', img: './assets/1.jpg', isFav: true},
                {title: 'self estem shit', author: 'john carling', img: './assets/2.jpg', isFav: false},
                {title: 'universe beyond', author: 'issac assimov', img: './assets/3.jpg', isFav: true}
            ],

            url: 'https://youtube.com',
        }
    },

    methods: {

        changeTitle() {
            this.title = 'changed on method component!'
        },

        changeTitleByPassingValue(title) {
            this.title = title
        },

        toggleShowValues() {
            // Reverse boolean
            this.showValues = !this.showValues
        },

        handleEvent(event, param) {
            console.log('$event object: ')
            console.log(event)
            console.log(`param: ${param}`)
        },

        handleEventMouseMove(event) {
            this.x = event.x
            this.y = event.y
        },

        toggleBookFav(book) {
            book.isFav = !book.isFav
        }
    },

    // computed is a property that allows you to define a function that computes a 
    // value based on other properties in your Vue instance's data object. 
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

// Links to a main div having app as ID
app.mount('#app')