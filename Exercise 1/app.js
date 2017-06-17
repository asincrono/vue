const app = new Vue({
  el: '#exercise',
  data: {
    name: 'Manuel C. Piñeiro Mourazos',
    age: '40',
    imgSrc: 'https://www.artgallery.nsw.gov.au/media/thumbnails/uploads/shop/a_1536.jpeg.2000x2000_q85.jpg'
  },
  methods: {
    random: function () {
      return Math.trunc(Math.random() * 101)
    }
  }
})