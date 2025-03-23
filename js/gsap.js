gsap.registerPlugin(ScrollTrigger);

$(function () {
  // 01 con01
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 50%",
        end: "30% 0%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".circle",
      {
        width: "0",
        height: "0",
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "0%",
      },
      {
        width: "550px",
        height: "550px",
        duration: 10,
        opacity: 1,
        top: "17%",
      },
      0
    );

  // 02 con02

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "20% 100%",
        end: "20% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".txt1",
      {
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "20%",
        fontSize: "0",
      },
      {
        duration: 10,
        opacity: 0.1,
        top: "5%",
        fontSize: "60",
      },
      0
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "35% 100%",
        end: "35% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".txt2",
      {
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "35%",
        fontSize: "0",
      },
      {
        duration: 10,
        opacity: 0.4,
        top: "20%",
        fontSize: "70",
        marginTop: "10",
      },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "50% 100%",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".txt3",
      {
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "50%",
        fontSize: "0",
      },
      {
        duration: 10,
        opacity: 0.6,
        top: "35%",
        fontSize: "80",
        marginTop: "10",
      },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "65% 100%",
        end: "65% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".txt4",
      {
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "65%",
        fontSize: "0",
      },
      {
        duration: 10,
        opacity: 0.8,
        top: "50%",
        fontSize: "90",
        marginTop: "10",
      },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "80% 100%",
        end: "80% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".txt5",
      {
        duration: 10,
        ease: "elastic",
        opacity: 0,
        top: "80%",
        fontSize: "0",
      },
      {
        duration: 10,
        opacity: 1,
        top: "65%",
        fontSize: "120",
        marginTop: "10",
      },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "100% 100%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".con02 span",
      {
        duration: 50,
        ease: "elastic",
        opacity: 0,
      },
      {
        duration: 50,
        opacity: 1,
      },
      0.5
    );

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
      // 02. 가로스크롤
      let list = gsap.utils.toArray(".work ul li");
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1), // 원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
        ease: "none",
        scrollTrigger: {
          trigger: ".work",
          pin: true,
          scrub: 1,
          start: "center center",
          end: "300%", // 뷰포트 높이의 300% 숫자가 클수록 속도가 느려진다.,
          // markers: true,
        },
      });

      // 03.imgBox 모션
      gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
        // 03-1: imgBox 커지는 애니메이션 => 화면 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center right",
              end: "center center",
              scrub: true,
              // markers: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(0%)", ease: "none", duration: 1 },
            0
          );
        // 03-2: imgBox 작아지는 애니메이션 => 화면 중앙에서 작아기 시작해서 왼쪽에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center center",
              end: "center left",
              scrub: true,
              // markers: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(30%)", ease: "none", duration: 1 },
            0
          );
      }); // 03. imgBox.end

      // 04. textBox
      gsap.utils.toArray(".textBox").forEach(function (textBox) {
        // 04-1: textBox 커지는 애니메이션 => 화면 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 70%",
              end: "center 40%",
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: "1", x: -100 }, 0);
        // 04-2: textBox 작아지는 애니메이션 => 화면 중앙에서 작아기 시작해서 왼쪽에서 끝나는 애니
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 30%",
              end: "center 20%",
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: "0" }, 0);

        // 05. counter 텍스트변경
        gsap.utils.toArray(".num").forEach(function (text) {
          let num = text.getAttribute("data-text");
          let counter = document.querySelector(".counter .now");

          ScrollTrigger.create({
            trigger: text,
            start: "0% center",
            end: "100% center",
            scrub: true,
            containerAnimation: scrollTween,
            onEnter: (self) => (counter.innerText = num), // 스크롤의 위치가 start를 지나 앞으로 이동할때 .counter .now에 적어준다.
            onEnterBack: (self) => (counter.innerText = num), //  스크롤의 위치가 end를 지나 뒤으로 이동할때 .counter .now에 적어준다.
            // markers: true,
          });
        });
      }); // 04. textBox.end
    },
  });

  // 05. 흩어지는 트리거
  gsap.timeline({
    scrollTrigger: {
      trigger: ".con03",
      start: "-200% 50%",
      end: "35% 50%",
      scrub: 1,
      onEnter: function () {
        $(".con03").addClass("active");
      },
      onLeave: function () {
        $(".con03").removeClass("active");
      },
      onEnterBack: function () {
        $(".con03").addClass("active");
      },
      onLeaveBack: function () {
        $(".con03").removeClass("active");
      },
      markers: true,
    },
  });
});
