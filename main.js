let mainText = document.querySelector("h1");
let h2 = document.querySelector("h2");
let s1 = document.getElementsByClassName("s1")[0];
let s2 = document.getElementsByClassName("s2")[0];
let s3 = document.getElementsByClassName("s3")[0];
let s4 = document.getElementsByClassName("s4")[0];

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scroll", value);
  if (value > 300) {
    mainText.style.animation = "disappear 1s ease-out forwards";
    //scrollY의 값이 300 초과인 경우 애니메이션 발동.
    //style.css의 disappear keyframe 적용, forwards 속성은 처음 상태로 다시 되돌려 줌.
    h2.style.animation = "disappear 1s ease-out forwards";
    s1.style.animation = "disappear 1s ease-out forwards";
    s2.style.animation = "disappear 1s ease-out forwards";
    s3.style.animation = "disappear 1s ease-out forwards";
    s4.style.animation = "disappear 1s ease-out forwards";
  } else {
    mainText.style.animation = "mySlide 1s ease-out";
    //scrollY값이 300 이하인 경우 다시 Slide animation 동작.
    h2.style.animation = "mySlide 1s ease-out";
    s1.style.animation = "mySlide 1s ease-out";
    s2.style.animation = "mySlide 1s ease-out";
    s3.style.animation = "mySlide 1s ease-out";
    s4.style.animation = "mySlide 1s ease-out";
  }
});
