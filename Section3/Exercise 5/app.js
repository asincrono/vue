new Vue({
  el: '#exercise',
  data: {
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    },
    show: false
  }, 
  beforeDestroy () {
    console.log('beforeDestroy()')
  },
  destroy () {
    console.log('destroy()')
  },
  methods: {
    toggle() {
      console.log('toggle trigger')
      this.show = !this.show
    }
  }
});
