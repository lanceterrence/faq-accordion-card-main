// Questions
var FAQ1 = document.getElementById("faq-one");
var FAQ2 = document.getElementById("faq-two");
var FAQ3 = document.getElementById("faq-three");
var FAQ4 = document.getElementById("faq-four");
var FAQ5 = document.getElementById("faq-five");
//Titles
var TitleOne = document.getElementById("title-one");
var TitleTwo = document.getElementById("title-two");
var TitleThree = document.getElementById("title-three");
var TitleFour = document.getElementById("title-four");
var TitleFive = document.getElementById("title-five");

function removeActive() {
    FAQ1.classList.remove("active");
    FAQ2.classList.remove("active");
    FAQ3.classList.remove("active");
    FAQ4.classList.remove("active");
    FAQ5.classList.remove("active");
    TitleOne.style.fontWeight = "400";
    TitleTwo.style.fontWeight = "400";
    TitleThree.style.fontWeight = "400";
    TitleFour.style.fontWeight = "400";
    TitleFive.style.fontWeight = "400";
}

//Onclick functions
FAQ1.onclick = function() {
    removeActive();

    FAQ1.classList.toggle("active");
    TitleOne.style.fontWeight = "700";
};

FAQ2.onclick = function() {
    removeActive();

    FAQ2.classList.toggle("active");
    TitleTwo.style.fontWeight = "700";
};

FAQ3.onclick = function() {
    removeActive();

    FAQ3.classList.toggle("active");
    TitleThree.style.fontWeight = "700";
};

FAQ4.onclick = function() {
    removeActive();

    FAQ4.classList.toggle("active");
    TitleFour.style.fontWeight = "700";
};

FAQ5.onclick = function() {
    removeActive();

    FAQ5.classList.toggle("active");
    TitleFive.style.fontWeight = "700";
};