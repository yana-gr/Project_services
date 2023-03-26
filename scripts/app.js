$(document).ready(function(){
    $(".sidebar__burger, .header__burger").click(function(event){
        $(".sidebar__burger,.header__burger,.sidebar").toggleClass("active");
        $("body").toggleClass("lock");
    })
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });