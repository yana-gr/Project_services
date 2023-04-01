
// Открытие/закрытие бокового меню
var sidebar = document.querySelector('.sidebar');
var openSidebar = document.querySelector('.header__burger');

openSidebar.addEventListener('click', function (evt) {
  evt.preventDefault();
  sidebar.classList.add('sidebar--show')
});

var closeSidebar = document.querySelector('.sidebar__burger');

closeSidebar.addEventListener('click', function (evt) {
  evt.preventDefault();
  sidebar.classList.remove('sidebar--show')
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    sidebar.classList.remove('sidebar--show')
  }
});

// Слайдер
if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

//Скрытие/раскрытие "Читать далее"
var buttonReadNext = document.querySelector('.about__button');
var showAllText = document.querySelector('.about__article');

buttonReadNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllText.classList.contains('about__article--show-all')){
    showAllText.classList.add('about__article--show-all');
    buttonReadNext.textContent = 'Свернуть';
    buttonReadNext.classList.remove('about__button--bottom');
    buttonReadNext.classList.add('about__button--top')
  } else {
    showAllText.classList.remove('about__article--show-all');
    buttonReadNext.textContent = 'Читать далее';
    buttonReadNext.classList.remove('about__button--top');
    buttonReadNext.classList.add('about__button--bottom')
  }
});


//Скрытие/раскрытие "Показать все бренды"
var buttonShowAll = document.querySelector('.brands__all');
var showAllBrands = document.querySelector('.brands__container');

buttonShowAll.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllBrands.classList.contains('brands__container--show-all')){
    showAllBrands.classList.add('brands__container--show-all');
    buttonShowAll.textContent = 'Скрыть';
    buttonShowAll.classList.remove('brands__all--bottom');
    buttonShowAll.classList.add('brands__all--top')
  } else {
    showAllBrands.classList.remove('brands__container--show-all');
    buttonShowAll.textContent = 'Показать все';
    buttonShowAll.classList.remove('brands__all--top');
    buttonShowAll.classList.add('brands__all--bottom')
  }
});
