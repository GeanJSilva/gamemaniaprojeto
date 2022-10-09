$(document).ready(function() {
    
    let slideIndex = 1;
    showSlides();
    
    //-------Carrossel---------
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("index-slides");
        let dots = document.getElementsByClassName("index-ponto");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1
        }    
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // mudar a cada 2 segundos
    }




})