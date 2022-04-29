const app = Vue.createApp({
  //    to avoid messy createApp we are advised to keep html template out of it
  data() {
    return {
      showBooks: true,
      name: "Maxwel Ochieng",
      book: "The Easier way to Learn React",
      age: 24,
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
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
  },
});
app.mount("#app");
