const app = Vue.createApp({
  data() {
    return {
      greeting: 'Hello Vue 3!',
      isVisible: false,
    }
  },
  methods: {
    toggleBox(){
      this.isVisible = !this.isVisible
    },
    greet(){
      console.log(this.greeting)
    },
  }
})