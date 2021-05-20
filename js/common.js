$(function(){
  /* script영역 scroll page */
  $("nav#gnb ul li a, .back_to_top a, a.button, .footer_top ul a").click(function(){
    // console.log($(this.hash));
    // console.log($(this.hash).offset().top);
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top);
    $("html,body").stop();
    $("html,body").animate({scrollTop: offsetElem.top},1500);
  });

  // scroll 상단 이동버튼 노출 / 비노출
  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    if($(this).scrollTop() == 0){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  // section offset top 값으로 scroll 시 class 추가
  let wHeight = $(window).innerHeight();
  console.log("window height : "+wHeight);
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    // console.log(thisScrollTop);
    $("section").each(function(){
      console.log($(this).offset().top);
      let thisOffset = $(this).offset();
      if(thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight){
        $(this).addClass("active");
      }
    });
  });
})//document ready
