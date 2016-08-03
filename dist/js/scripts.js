;
(function() {
    'use strict';

    window.onload = function() {
        document.getElementsByClassName('mobile-menu-show')[0].addEventListener('click', toggleMobileMenu);
        document.getElementsByClassName('mobile-menu-hide')[0].addEventListener('click', toggleMobileMenu);
    };
    
    function toggleMobileMenu() {
        document.getElementsByClassName('top-menu')[0].classList.toggle('visible');
        document.getElementsByClassName('mobile-menu-hide')[0].classList.toggle('invisible');
    }
})();
