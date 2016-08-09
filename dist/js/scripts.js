;
(function() {
    'use strict';

    window.onload = function() {
        document.getElementsByClassName('mobile-menu')[0].addEventListener('click', toggleMobileMenu);
    };
    
    function toggleMobileMenu() {
        document.getElementsByClassName('top-menu')[0].classList.toggle('visible');
        var iconTag = document.getElementsByClassName('mobile-menu')[0].getElementsByClassName('fa')[0].classList;
        if (iconTag.contains('fa-times')) {
            iconTag.remove('fa-times');
            iconTag.add('fa-bars');
        } else {
            iconTag.remove('fa-bars');
            iconTag.add('fa-times');
        }
            
    }
})();
