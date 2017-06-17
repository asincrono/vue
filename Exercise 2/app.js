const app = new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  computed: {
    result: function(value) {
      console.log();
      return value < 37 ? "not there yet" : "done";
    }
  },
  methods: {
    showAlert: function() {
      alert("Alert!");
    },

    saveValue: function(event) {
      this.value = event.target.value;
    }
  }
});
