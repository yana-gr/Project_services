$(document).ready(function(){
    $(".sidebar__burger, .header__burger").click(function(event){
        $(".sidebar__burger,.header__burger,.sidebar").toggleClass("active");
        $("body").toggleClass("lock");
    })
})