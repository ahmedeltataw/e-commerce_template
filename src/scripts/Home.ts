import Swiper from 'swiper/bundle';
new Swiper(".heroSwiper", {
    loop:true,
    navigation: {
      nextEl: " .swiper-button-next",
      prevEl: " .swiper-button-prev",
    },
  });
  // cate swiper
  new Swiper(".cateSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
  new Swiper(".ClientSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  new Swiper(".ProductSwiper", {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    spaceBetween: 10,
    speed: 700,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // ser box animations
  let boxSer = document.querySelectorAll(".boxSer-1") as NodeListOf<HTMLDivElement>;
if(boxSer) boxSer.forEach((box:HTMLDivElement)=>{
  if(!box) return;
  box.addEventListener('mousemove' , (e:MouseEvent)=>{
    let x = e.pageX - box.offsetLeft;
    let y = e.pageY - box.offsetTop;
    box.style.setProperty('--x' , x +'px');
    box.style.setProperty('--y' , y +'px');
  })
})