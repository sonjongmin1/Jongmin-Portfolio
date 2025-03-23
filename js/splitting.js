// 01. 스플리팅 호출
$(function () {
  Splitting();
});

// 02. nav 영역 스크롤 방향 이벤트
$(function () {
  let prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    let nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("nav").addClass("active");
    } else {
      $("nav").removeClass("active");
    }
    prevScrollTop = nowScrollTop;
  });
});
