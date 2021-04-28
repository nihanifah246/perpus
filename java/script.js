function openNav(){ 
  const mySidebar = document.getElementById('mySidebar');
  const main = document.getElementById('main');
  mySidebar.style.width = '250px';
  main.style.marginLeft = '250px';
}

function closeNav(){
  const mySidebar = document.getElementById('mySidebar');
  const main = document.getElementById('main');
  mySidebar.style.width = '0px';
  main.style.marginLeft = '0px';
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 3000);
}