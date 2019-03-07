function hamburger() {
    const nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
}
let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-red";
}
// let  formdiv = document.getElementById('content');
//
// let htmlcontent = 'Kies een form';
//
// function setindex(event){
//     switch (event.target.value) {
//         case 'form1':{
//             htmlcontent = 'dit is form 1.';
//             break;
//         }
//         case 'form2':{
//             htmlcontent = 'dit is form 2.';
//             break;
//         }
//     }
//     formdiv.innerHTML = htmlcontent;
// }
