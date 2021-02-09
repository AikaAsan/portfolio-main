const navSlide = function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');
    
    // Toggle Nav ES6 version 
    // burger.addEventListener('click', ()=> {
    //     nav.classList.toggle('nav-active');
    // });

    burger.addEventListener('click', function(){
    //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
