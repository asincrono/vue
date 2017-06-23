new Vue({
  el: "#exercise",
  data: {
    on: false,
    userClass: '',
    userClass2: '',
    userTrueOrFalse: false,
    userStyle: '',
    progressWidth: 500
  },
  methods: {
    switchEffect: function() {
      console.log(`switching (effect: ${this.on})`)
      this.on = this.on ? false : true
    },

    startEffect: function() {
      let self = this;
      setInterval(() => {
        self.switchEffect();
      }, 2000);
    },

    startProgress: function() {
      let self = this
      setInterval(() => {
        if (self.progressWidth > 0) self.progressWidth -= 10
      }, 300)
    }
  }
});
