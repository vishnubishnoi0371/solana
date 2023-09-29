$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    variableWidth: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
  <script>
        AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true,
}
);
    </script>

let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let Home = document.querySelector(".Home");
let Build = document.querySelector(".Build");
let Network = document.querySelector(".Network");
let Community = document.querySelector(".Community");



menuicon.addEventListener("click", function () {
    if(a.classList !== document.querySelector("fix-lft")){
    a.classList.toggle("fix-lft");
    flow.classList.toggle("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3")}
});

Home.addEventListener("click",function(){
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Build.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Network.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Community.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});


