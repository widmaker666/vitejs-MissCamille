//* Navbar animation //

//- Menu Hamburger //
//! Constantes //
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-link");
const hRef1 = document.querySelector("#href1");
const hRef2 = document.querySelector("#href2");
const hRef3 = document.querySelector("#href3");
const hRef4 = document.querySelector("#href4");
const hRef5 = document.querySelector("#href5");
const hRef6 = document.querySelector("#href6");
const hRef7 = document.querySelector("#href7");

//! Fonctions //
menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("mobile-menu");
})

//! Href module-menu //
hRef1.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

hRef2.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
hRef3.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
hRef4.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
hRef5.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
hRef6.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
hRef7.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
//! --------------------------------------------------------------- //
//* Animation About //

//- Photo disparition //

//! Constants //
//! Photos //
const photo1 = document.querySelector("#img1");
const photo2 = document.querySelector("#img2");
const photo3 = document.querySelector("#img3");
const photo4 = document.querySelector("#img4");

//! Texts //
const text1 = document.querySelector("#text-1");
const text2 = document.querySelector("#text-2");

//! Fonctions About Animations responsivity //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = photo1.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((photo1.style.opacity = 1), (photo1.style.transition = "0.5s ease"))
    : (photo1.style.opacity = 0);
});

window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = photo2.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((photo2.style.opacity = 1), (photo2.style.transition = "0.5s ease-in"))
    : (photo2.style.opacity = 0);
});

window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = photo3.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((photo3.style.opacity = 1), (photo3.style.transition = "0.5s ease-in"))
    : (photo3.style.opacity = 0);
});

window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = photo4.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.5
    ? ((photo4.style.opacity = 1), (photo4.style.transition = "0.5s ease-in"))
    : (photo4.style.opacity = 0);
});

//! Fonctions Texts Animation //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topScroll = text1.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topScroll).toFixed() - clientHeight * 0.8
    ? ((text1.style.transform = "none"), (text1.style.transition = "1s ease"))
    : (text1.style.transform = "translateX(120%)");
});

window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topScroll = text2.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topScroll).toFixed() - clientHeight * 0.9
    ? ((text2.style.transform = "none"), (text2.style.transition = "1s ease"))
    : (text2.style.transform = "translateX(-120%)");
});
//! --------------------------------------------------------------- //
//* Animation Jewel //

//- Photo apparition //
//! Constants //
const div1 = document.querySelector(".jewel1");
const div2 = document.querySelector(".jewel2");
const div3 = document.querySelector(".jewel3");
const div4 = document.querySelector(".jewel4");
const div5 = document.querySelector(".jewel5");
const div6 = document.querySelector(".jewel6");
const div7 = document.querySelector(".jewel7");
const div8 = document.querySelector(".jewel8");
const divLogo = document.querySelector(".logo-jewel");

//! Scroll Event 1 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument =
    div1.getBoundingClientRect().top ||
    div1Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div1.style.opacity = 1), (div1.style.transition = "0.3s ease"))
    : (div1.style.opacity = 0);
});

//! Scroll Event 2//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div2.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div2.style.opacity = 1), (div2.style.transition = "0.8s ease"))
    : (div2.style.opacity = 0);
});
//! Scroll Event 3//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div3.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div3.style.opacity = 1), (div3.style.transition = "0.8s ease"))
    : (div3.style.opacity = 0);
});

//! Scroll Event 4//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div4.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.7
    ? ((div4.style.opacity = 1), (div4.style.transition = "0.5s ease"))
    : (div4.style.opacity = 0);
});

//! Scroll Event 5//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div5.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.7
    ? ((div5.style.opacity = 1), (div5.style.transition = "0.8s ease"))
    : (div5.style.opacity = 0);
});
//! Scroll Event 6//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div6.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.7
    ? ((div6.style.opacity = 1), (div6.style.transition = "0.8s ease"))
    : (div6.style.opacity = 0);
});

//! Scroll Event 7//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div7.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div7.style.opacity = 1), (div7.style.transition = "0.5s ease"))
    : (div7.style.opacity = 0);
});

//! Scroll Event 8//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div8.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div8.style.opacity = 1), (div8.style.transition = "0.8s ease"))
    : (div8.style.opacity = 0);
});
//! Scroll Event divLogo//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = divLogo.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.9
    ? ((divLogo.style.opacity = 1), (divLogo.style.transition = "0.8s ease"))
    : (divLogo.style.opacity = 0);
});
//! --------------------------------------------------------------- //
//* Responsive Scroll jewel event animation //

//! Constants Responsive tablets smartphone //
const div1Responsive = document.querySelector(".jewel1-responsive");
const div2Responsive = document.querySelector(".jewel2-responsive");
const div3Responsive = document.querySelector(".jewel3-responsive");
const div4Responsive = document.querySelector(".jewel4-responsive");
const div5Responsive = document.querySelector(".jewel5-responsive");
const div6Responsive = document.querySelector(".jewel6-responsive");
const div7Responsive = document.querySelector(".jewel7-responsive");
const div8Responsive = document.querySelector(".jewel8-responsive");
const divLogoResponsive = document.querySelector(".logo-jewel-responsive");

//! Scroll Event 1 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div1Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div1Responsive.style.opacity = 1),
      (div1Responsive.style.transition = "0.3s ease"))
    : (div1Responsive.style.opacity = 0);
});

//! Scroll Event 2//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div2Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div2Responsive.style.opacity = 1),
      (div2Responsive.style.transition = "0.8s ease"))
    : (div2Responsive.style.opacity = 0);
});
//! Scroll Event 3//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div3Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div3Responsive.style.opacity = 1),
      (div3Responsive.style.transition = "0.8s ease"))
    : (div3Responsive.style.opacity = 0);
});

//! Scroll Event 4//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div4Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div4Responsive.style.opacity = 1),
      (div4Responsive.style.transition = "0.5s ease"))
    : (div4Responsive.style.opacity = 0);
});

//! Scroll Event 5//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div5Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div5Responsive.style.opacity = 1),
      (div5Responsive.style.transition = "0.8s ease"))
    : (div5Responsive.style.opacity = 0);
});
//! Scroll Event 6//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div6Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div6Responsive.style.opacity = 1),
      (div6Responsive.style.transition = "0.8s ease"))
    : (div6Responsive.style.opacity = 0);
});

//! Scroll Event 7//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div7Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div7Responsive.style.opacity = 1),
      (div7Responsive.style.transition = "0.8s ease"))
    : (div7Responsive.style.opacity = 0);
});

//! Scroll Event 8//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div8Responsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.8
    ? ((div8Responsive.style.opacity = 1),
      (div8Responsive.style.transition = "0.8s ease"))
    : (div8Responsive.style.opacity = 0);
});
//! Scroll Event divLogo//
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = divLogoResponsive.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 0.9
    ? ((divLogoResponsive.style.opacity = 1),
      (divLogoResponsive.style.transition = "0.8s ease"))
    : (divLogoResponsive.style.opacity = 0);
});

//! --------------------------------------------------------------- //
//* POPUP BIJOUX au click //

//- Jewel 1 //
//! Constants Photo jewels //
const jewel1 = document.querySelector("#jewel1-img");
const popupContainer = document.querySelector(".popup-container");

//! Click event //
jewel1.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img1 = document.createElement("img");
  img1.src = "./assets/imagesWebp/bijou1.webp";
  img1.id = "bijou1";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img1);
});

popupContainer.addEventListener("click", () => {
  // div image
  let img = document.getElementById("bijou1");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img);
});

//- Jewel 2 //
//! Constants Photo jewels //
const jewel2 = document.querySelector("#jewel2-img");
const popupContainer2 = document.querySelector(".popup-container");

//! Click event //
jewel2.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img2 = document.createElement("img");
  img2.src = "./assets/imagesWebp/newbijoux4.webp";
  img2.id = "bijou2";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img2);
});

popupContainer2.addEventListener("click", () => {
  // div image
  let img2 = document.getElementById("bijou2");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img2);
});

//- Jewel 3 //
//! Constants Photo jewels //
const jewel3 = document.querySelector("#jewel3-img");
const popupContainer3 = document.querySelector(".popup-container");

//! Click event //
jewel3.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img3 = document.createElement("img");
  img3.src = "./assets/imagesWebp/bijou4.webp";
  img3.id = "bijou3";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img3);
});

popupContainer3.addEventListener("click", () => {
  // div image
  let img3 = document.getElementById("bijou3");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img3);
});

//- Jewel 4 //
//! Constants Photo jewels //
const jewel4 = document.querySelector("#jewel4-img");
const popupContainer4 = document.querySelector(".popup-container");

//! Click event //
jewel4.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img4 = document.createElement("img");
  img4.src = "./assets/imagesWebp/newbijou6.webp";
  img4.id = "bijou4";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img4);
});

popupContainer4.addEventListener("click", () => {
  // div image
  let img4 = document.getElementById("bijou4");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img4);
});

//- Jewel 5 //
//! Constants Photo jewels //
const jewel5 = document.querySelector("#jewel5-img");
const popupContainer5 = document.querySelector(".popup-container");

//! Click event //
jewel5.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img5 = document.createElement("img");
  img5.src = "./assets/imagesWebp/bijou5.webp";
  img5.id = "bijou5";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img5);
});

popupContainer5.addEventListener("click", () => {
  // div image
  let img5 = document.getElementById("bijou5");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img5);
});

//- Jewel 6 //
//! Constants Photo jewels //
const jewel6 = document.querySelector("#jewel6-img");
const popupContainer6 = document.querySelector(".popup-container");

//! Click event //
jewel6.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img6 = document.createElement("img");
  img6.src = "./assets/imagesWebp/bijou2.webp";
  img6.id = "bijou6";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img6);
});

popupContainer6.addEventListener("click", () => {
  // div image
  let img6 = document.getElementById("bijou6");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img6);
});

//- Jewel 7 //
//! Constants Photo jewels //
const jewel7 = document.querySelector("#jewel7-img");
const popupContainer7 = document.querySelector(".popup-container");

//! Click event //
jewel7.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img7 = document.createElement("img");
  img7.src = "./assets/imagesWebp/bijou7.webp";
  img7.id = "bijou7";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img7);
});

popupContainer7.addEventListener("click", () => {
  // div image
  let img7 = document.getElementById("bijou7");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img7);
});

//- Jewel 8 //
//! Constants Photo jewels //
const jewel8 = document.querySelector("#jewel8-img");
const popupContainer8 = document.querySelector(".popup-container");

//! Click event //
jewel8.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img8 = document.createElement("img");
  img8.src = "./assets/imagesWebp/bijou9.webp";
  img8.id = "bijou8";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img8);
});

popupContainer8.addEventListener("click", () => {
  // div image
  let img8 = document.getElementById("bijou8");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img8);
});

//- Jewel 9 //
//! Constants Photo jewels //
const jewel9 = document.querySelector("#jewel9-img");
const popupContainer9 = document.querySelector(".popup-container");

//! Click event //
jewel9.addEventListener("click", () => {
  // div image
  let divImg = document.querySelector(".image-container");
  const img9 = document.createElement("img");
  img9.src = "./assets/imagesWebp/bijou6.webp";
  img9.id = "bijou9";

  // add image //
  popupContainer.classList.toggle("active");
  divImg.appendChild(img9);
});

popupContainer9.addEventListener("click", () => {
  // div image
  let img9 = document.getElementById("bijou9");
  let divImg = document.querySelector(".image-container");

  // remove image //
  popupContainer.classList.remove("active");
  divImg.removeChild(img9);
});

//* responsive BIJOUX au click pour les grossir //
//- Jewel 1 //
//! Constants Photo jewels //
const jewel1Responsive = document.getElementById("jewel-1-responsive");

jewel1Responsive.addEventListener("click", () => {
  jewel1Responsive.classList.toggle("imgactive");
});
//- Jewel 2 //
//! Constants Photo jewels //
const jewel2Responsive = document.getElementById("jewel-2-responsive");

jewel2Responsive.addEventListener("click", () => {
  jewel2Responsive.classList.toggle("imgactive");
});
//- Jewel 3 //
//! Constants Photo jewels //
const jewel3Responsive = document.getElementById("jewel-3-responsive");

jewel3Responsive.addEventListener("click", () => {
  jewel3Responsive.classList.toggle("imgactive");
});
//- Jewel 4 //
//! Constants Photo jewels //
const jewel4Responsive = document.getElementById("jewel-4-responsive");

jewel4Responsive.addEventListener("click", () => {
  jewel4Responsive.classList.toggle("imgactive");
});
//- Jewel 5 //
//! Constants Photo jewels //
const jewel5Responsive = document.getElementById("jewel-5-responsive");

jewel5Responsive.addEventListener("click", () => {
  jewel5Responsive.classList.toggle("imgactive");
});
//- Jewel 6 //
//! Constants Photo jewels //
const jewel6Responsive = document.getElementById("jewel-6-responsive");

jewel6Responsive.addEventListener("click", () => {
  jewel6Responsive.classList.toggle("imgactive");
});
//- Jewel 7 //
//! Constants Photo jewels //
const jewel7Responsive = document.getElementById("jewel-7-responsive");

jewel7Responsive.addEventListener("click", () => {
  jewel7Responsive.classList.toggle("imgactive");
});
//- Jewel 8 //
//! Constants Photo jewels //
const jewel8Responsive = document.getElementById("jewel-8-responsive");

jewel8Responsive.addEventListener("click", () => {
  jewel8Responsive.classList.toggle("imgactive");
});

//- Jewel 9 //
//! Constants Photo jewels //
const jewel9Responsive = document.getElementById("jewel-9-responsive");

jewel9Responsive.addEventListener("click", () => {
  jewel9Responsive.classList.toggle("imgactive");
});
//! --------------------------------------------------------------- //
//* Background Filter btn hover //

//! Constants //

const filterBlurOn = [
  {
    filter:
      "blur(8px) brightness(80%) saturate(54%) opacity(90%) contrast(300%)",

    transform: "scale(1.05)",
  },
];

const filterBlurOff = [
  {
    filter: "none",
    transform: "scale(1)",
  },
];

const animationOn = {
  duration: 1000,
  fill: "forwards",
  iterations: 1,
};
const animationOff = {
  duration: 500,
  fill: "forwards",
  iterations: 1,
};

//! Fonctions filter 1 //
// Constants //
const btn = document.querySelector("#btn1");
const btnBackground = document.getElementById("img-1");

// Fonction //
btn.addEventListener("mouseover", () => {
  btnBackground.animate(filterBlurOn, animationOn);
});
btn.addEventListener("mouseleave", () => {
  btnBackground.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 2 //
// Constants //
const btn2 = document.querySelector("#btn2");
const btnBackground2 = document.getElementById("img-2");

// Fonction //
btn2.addEventListener("mouseover", () => {
  btnBackground2.animate(filterBlurOn, animationOn);
});
btn2.addEventListener("mouseleave", () => {
  btnBackground2.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 3 //
// Constants //
const btn3 = document.querySelector("#btn3");
const btnBackground3 = document.getElementById("img-3");

// Fonction //
btn3.addEventListener("mouseover", () => {
  btnBackground3.animate(filterBlurOn, animationOn);
});
btn3.addEventListener("mouseleave", () => {
  btnBackground3.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 4 //
// Constants //
const btn4 = document.querySelector("#btn4");
const btnBackground4 = document.getElementById("img-4");

// Fonction //
btn4.addEventListener("mouseover", () => {
  btnBackground4.animate(filterBlurOn, animationOn);
});
btn4.addEventListener("mouseleave", () => {
  btnBackground4.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 5 //
// Constants //
const btn5 = document.querySelector("#btn5");
const btnBackground5 = document.getElementById("img-5");

// Fonction //
btn5.addEventListener("mouseover", () => {
  btnBackground5.animate(filterBlurOn, animationOn);
});
btn5.addEventListener("mouseleave", () => {
  btnBackground5.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 6 //
// Constants //
const btn6 = document.querySelector("#btn6");
const btnBackground6 = document.getElementById("img-6");

// Fonction //
btn6.addEventListener("mouseover", () => {
  btnBackground6.animate(filterBlurOn, animationOn);
});
btn6.addEventListener("mouseleave", () => {
  btnBackground6.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 7 //
// Constants //
const btn7 = document.querySelector("#btn7");
const btnBackground7 = document.getElementById("img-7");

// Fonction //
btn7.addEventListener("mouseover", () => {
  btnBackground7.animate(filterBlurOn, animationOn);
});
btn7.addEventListener("mouseleave", () => {
  btnBackground7.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 8 //
// Constants //
const btn8 = document.querySelector("#btn8");
const btnBackground8 = document.getElementById("img-8");

// Fonction //
btn8.addEventListener("mouseover", () => {
  btnBackground8.animate(filterBlurOn, animationOn);
});
btn8.addEventListener("mouseleave", () => {
  btnBackground8.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 9 //
// Constants //
const btn9 = document.querySelector("#btn9");
const btnBackground9 = document.getElementById("img-9");

// Fonction //
btn9.addEventListener("mouseover", () => {
  btnBackground9.animate(filterBlurOn, animationOn);
});
btn9.addEventListener("mouseleave", () => {
  btnBackground9.animate(filterBlurOff, animationOff);
});

//! Fonctions filter 10 //
// Constants //
const btn10 = document.querySelector("#btn10");
const btnBackground10 = document.getElementById("img-10");

// Fonction //
btn10.addEventListener("mouseover", () => {
  btnBackground10.animate(filterBlurOn, animationOn);
});
btn10.addEventListener("mouseleave", () => {
  btnBackground10.animate(filterBlurOff, animationOff);
});

//! --------------------------------------------------------------- //
//* Scroll animation Collection //

//- Div apparition //
//! Constants //
const div1Collection = document.querySelector(".img1-collection");
const div2Collection = document.querySelector(".img2-collection");
const div3Collection = document.querySelector(".img3-collection");
const div4Collection = document.querySelector(".img4-collection");
const div5Collection = document.querySelector(".img5-collection");
const div6Collection = document.querySelector(".img6-collection");
const div7Collection = document.querySelector(".img7-collection");
const div8Collection = document.querySelector(".img8-collection");
const div9Collection = document.querySelector(".img9-collection");
const div10Collection = document.querySelector(".img10-collection");

//! Scroll Event 1 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument = div1Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument).toFixed() - clientHeight * 1
    ? ((div1Collection.style.opacity = 1),
      (div1Collection.style.transform = "translate(0%, 0%)"),
      (div1Collection.style.transition = "0.8s ease"))
    : ((div1Collection.style.transform = "translate(-100%, 100%)"),
      (div1Collection.style.opacity = 0));
});

//! Scroll Event 2 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument2 = div2Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument2).toFixed() - clientHeight * 1
    ? ((div2Collection.style.transform = "translate(0%, 0%)"),
      (div2Collection.style.transition = "0.8s ease"),
      (div2Collection.style.opacity = 1))
    : ((div2Collection.style.transform = "translate(100%, 100%)"),
      (div2Collection.style.opacity = 0));
});

//! Scroll Event 3 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument3 = div3Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument3).toFixed() - clientHeight * 0.8
    ? ((div3Collection.style.transform = "translate(0%)"),
      (div3Collection.style.transition = "0.8s ease"),
      (div3Collection.style.opacity = 1))
    : ((div3Collection.style.transform = "translate(-100%)"),
      (div3Collection.style.opacity = 0));
});

//! Scroll Event 4 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument4 = div4Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument4).toFixed() - clientHeight * 0.8
    ? ((div4Collection.style.transform = "translate(0%)"),
      (div4Collection.style.transition = "0.8s ease"),
      (div4Collection.style.opacity = 1))
    : ((div4Collection.style.transform = "translate(100%)"),
      (div4Collection.style.opacity = 0));
});

//! Scroll Event 5 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument5 = div5Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument5).toFixed() - clientHeight * 0.9
    ? ((div5Collection.style.opacity = 1),
      (div5Collection.style.transition = "3s ease"))
    : (div5Collection.style.opacity = 0);
});

//! Scroll Event 6 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument6 = div6Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument6).toFixed() - clientHeight * 0.9
    ? ((div6Collection.style.opacity = 1),
      (div6Collection.style.transition = "3s ease"))
    : (div6Collection.style.opacity = 0);
});

//! Scroll Event 7 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument7 = div7Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument7).toFixed() - clientHeight * 1
    ? ((div7Collection.style.transform = "translate(0%)"),
      (div7Collection.style.transition = "0.8s ease"),
      (div7Collection.style.opacity = 1))
    : ((div7Collection.style.transform = "translate(-100%)"),
      (div7Collection.style.opacity = 0));
});

//! Scroll Event 8 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument8 = div8Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument8).toFixed() - clientHeight * 1
    ? ((div8Collection.style.transform = "translate(0%)"),
      (div8Collection.style.transition = "0.8s ease"),
      (div8Collection.style.opacity = 1))
    : ((div8Collection.style.transform = "translate(100%)"),
      (div8Collection.style.opacity = 0));
});

//! Scroll Event 9 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument9 = div9Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument9).toFixed() - clientHeight * 1.5
    ? ((div9Collection.style.transform = "translate(0%, 0%)"),
      (div9Collection.style.transition = "0.8s ease"))
    : (div9Collection.style.transform = "translate(-100%, 100%)");
});

//! Scroll Event 10 //
window.addEventListener("scroll", () => {
  // Const //
  const { scrollTop, clientHeight } = document.documentElement;
  const topDocument10 = div10Collection.getBoundingClientRect().top;

  // Ternaire //
  scrollTop > (scrollTop + topDocument10).toFixed() - clientHeight * 1.5
    ? ((div10Collection.style.transform = "translate(0%, 0%)"),
      (div10Collection.style.transition = "0.8s ease"),
      (div10Collection.style.opacity = 1))
    : ((div10Collection.style.transform = "translate(100%, 100%)"),
      (div10Collection.style.opacity = 0));
});

//! --------------------------------------------------------------- //
//* Form Contact EmailJS "faire des validates pour obliger les champs//

// Functions //
function validate() {
  let name = document.getElementById("from_name");
  let email = document.getElementById("email_id");
  let message = document.getElementById("message");
  let submit = document.querySelector(".submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value == "" || email.value == "" || message.value == "") {
      alert("N'oublie pas de remplir tous les champs du formulaire");
    } else {
      sendMail();
    }
  });
}
validate();

function sendMail() {
  const serviceID = import.meta.env.VITE_KEY_GOOGLE;
  const templateID = import.meta.env.VITE_KEY_TEMPLATE;

  emailjs
    .send(serviceID, templateID, {
      from_name: document.getElementById("from_name").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value,
    })
    .then((res) => {
      document.getElementById("from_name").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Ton message est bien envoyé ! merci");
    });
}

//! --------------------------------------------------------------- //
//* text anime //
const target = document.getElementById("target");
let array = ["Simplement\ féminin...", "Une\ idée,\ un\ rêve,\ un\ chemin...", "Le\ détail\ est\ humain...", "Une\ création\ au\ quotidien...", "Un\ geste\ qui\ vient\ du\ destin..."];
let wordIndex = 0;
let letterIndex = 0;

/* textContent permet injecter du texte dans la balise h3 en l'occurence */

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
