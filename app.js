const app = Vue.createApp({
  //    to avoid messy createApp we are advised to keep html template out of it
  data() {
    return {
      showBooks: true,
      url: "devmaxwel.github.io/portfolio/",
      name: "Maxwel Ochieng",
      books: [
        {
          title: "The A Student",
          year: 1990,
          author: "Maxwel",
          img: "assets/1.png",
          isFav:true
        },
        {
          title: "The Do's and Dont's of Developer",
          year: 1990,
          author: "Maxwel",
          img: "assets/2.png",
          isFav: false,
        },
        {
          title: "JavaScript Cheatsheet",
          year: 1990,
          author: "Maxwel",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      age: 24,
      x: 0,
      y: 0,
    };
  },
  methods: {
    increaseAge() {
      console.log("you clicked me");
      this.age = this.age + 1;
    },
    changeTitle() {
      console.log("Title Changed");
      this.book = "Next JS Cheat sheet";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        return console.log(data);
      }
    },
    handleMove(e) {
      (this.x = e.offsetX), (this.y = e.offsetY);
    },
    handleColor(book){
       book.isFav = !book.isFav
    }
  },
  computed:{
      filteredBooks(){
          return this.books.filter((book) =>{
              return book.isFav
          })
      }
  }
});
app.mount("#app");
