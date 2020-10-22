$(".event__list").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow:
    '<span class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>',
});
$(".testimonials__list").slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:
    '<span class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>',
});
