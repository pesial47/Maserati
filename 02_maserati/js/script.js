var swiper = new Swiper(".visual_wrap", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

//date
let dForm=$("#day").datepicker({
    dateFormat:"yy-mm-dd"
  });

  dForm.datepicker("setDate", new Date());




var swiper = new Swiper(".model_area", {
    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });


//360 wheel

  for(var i=1;i<=36;i++){

    $(".car").append("<img src='./images/levante360/"+i+".jpg' alt='car1'>")};
    $(".car img").eq(0).css({visiblity:"visible"});
  
  var num=0;
  var img_end=$(".car_pic img:last").index();

  $(".car_pic").on("mousewheel", function(e, delta){
    if(delta<0){
      num++;
      if(num>=img_end){num=0;}
      $(".car img").css({visibility:"hidden"});
      $(".car img").eq(num).css({visibility:"visible"});
    }else{
      num--;
      if(num<0){num=img_end;}
      $(".car img").css({visibility:"hidden"});
      $(".car img").eq(num).css({visibility:"visible"})
    }
  });

  $(".turn").click(function(e){
    e.preventDefault();
    $(this).index();
    $(".overlay").show();
    $('body').css({overflow:"hidden"});
  });
  $(".overlay").click(function(e){
    e.preventDefault();
    $(".overlay").hide();
    $("body").css({overflow:"auto"});

  });

//animate
// let car1=$(".new").find(".car1").offet().top();
// $(window).scroll(function(){
//   let carTop=$(document).scrollTop();
//   if(carTop>=car1-100){
//     $(".new").find(".car1").addClass("slideUp");
//   }
// });