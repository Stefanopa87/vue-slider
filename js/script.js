function init(){

  new Vue({

    el: '#app',
    data: {
      imgNum: 1,
    },

    methods: {
      next: function(){
        if (this.imgNum == 3) {
          this.imgNum = 1
        } else{
          this.imgNum++
        }
      },
      prev: function(){
        if (this.imgNum == 1) {
          this.imgNum = 3
        } else{
          this.imgNum--
        }
      }
    }
  });
}



$(document).ready(init);
