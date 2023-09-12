$(function () {
  $(document).scroll(function () {
    var $nav = $(".navConMain");
    var $header = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > ($header.height()-100));
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//Future USe Code
// function logoSwitch () {
//   $('.altLogo').each(function() {
//     $(this).css('top',
//       $('.startLogo').offset().top -  $(this).closest('.row').offset().top
//     );
//   });
// };

// $(document).scroll(function() {logoSwitch();});

// logoSwitch();
// 													// Hide Button  

// $(document).ready(function() {
//   $("#toggle2").click(function() {
//     var x = $("#toggle2").text();
//     if (x == "Feedback") {
//       //Stuff to do when btn is in the read more state
//       $("#toggle2").text("Feedback");
//       $("#text2").slideDown();
//     }
//   });
// });     

// $(document).ready(function() {
//   $("#toggle3").click(function() {
// 	var x = $("#toggle2").text();
//     if (x == "Feedback") {
//       //Stuff to do when btn is in the read more state
//       $("#toggle2").text("Feedback");
//       $("#text2").slideDown();
//     }
// 	if (sidebarBox.classList.contains('active')) {
// 		sidebarBox.classList.remove('active');
// 		sidebarBtn.classList.remove('active');
// 	}
//   });
//   $('#close').click(function() {
// 	$("#text2").slideUp();
//   });
// });

//                                                              //---NAV_BTN---//

// var sidebarBox = document.querySelector('#box');
// var sidebarBtn = document.querySelector('.clogo');
// var pageWrapper = document.querySelector('#main-content');

// sidebarBtn.addEventListener('click', function(event) {

//   if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       sidebarBox.classList.remove('active');
//   } else {
//       this.classList.add('active');
//       sidebarBox.classList.add('active');
//   }
// });

// pageWrapper.addEventListener('click', function(event) {

//   if (sidebarBox.classList.contains('active')) {
//       sidebarBtn.classList.remove('active');
//       sidebarBox.classList.remove('active');
//   }
// });

// window.addEventListener('keydown', function(event) {

//   if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
//       sidebarBtn.classList.remove('active');
//       sidebarBox.classList.remove('active');
//   }
// });
