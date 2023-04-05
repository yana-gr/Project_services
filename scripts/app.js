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
  const swiper = new Swiper('.brands__container', {
    slidesPerView: 5,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.brands--swiper-pagination',
    },
  });
}

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.devices__container', {
    slidesPerView: 3,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.devices--swiper-pagination',
    },
  });
} 

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.prices__container', {
    slidesPerView: 2,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.prices--swiper-pagination',
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
    buttonReadNext.classList.remove('show__all--bottom');
    buttonReadNext.classList.add('show__all--top')
  } else {
    showAllText.classList.remove('about__article--show-all');
    buttonReadNext.textContent = 'Читать далее';
    buttonReadNext.classList.remove('show__all--top');
    buttonReadNext.classList.add('show__all--bottom')
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
    buttonShowAll.classList.remove('show__all--bottom');
    buttonShowAll.classList.add('show__all--top')
  } else {
    showAllBrands.classList.remove('brands__container--show-all');
    buttonShowAll.textContent = 'Показать все';
    buttonShowAll.classList.remove('show__all--top');
    buttonShowAll.classList.add('show__all--bottom')
  }
});

//Скрытие/раскрытие "Показать все услуги"
var buttonShowAllDevices = document.querySelector('.devices__all');
var showAllDevices = document.querySelector('.devices__container');

buttonShowAllDevices.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllDevices.classList.contains('devices__container--show-all')){
    showAllDevices.classList.add('devices__container--show-all');
    buttonShowAllDevices.textContent = 'Скрыть';
    buttonShowAllDevices.classList.remove('show__all--bottom');
    buttonShowAllDevices.classList.add('show__all--top')
  } else {
    showAllDevices.classList.remove('devices__container--show-all');
    buttonShowAllDevices.textContent = 'Показать все';
    buttonShowAllDevices.classList.remove('show__all--top');
    buttonShowAllDevices.classList.add('show__all--bottom')
  }
});
