var toggler = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
var mainMenuItems = document.querySelectorAll('.main-menu-item');
var sub = document.querySelectorAll('.sub-menu');


window.addEventListener('resize', function(){
    if(window.innerWidth <= 850){
        //Toggling the menu on and off 
        toggler.addEventListener('click',function(){
        if (menu.style.visibility == 'visible') {
            menu.style.visibility = 'hidden';
        } else {
            menu.style.visibility = 'visible';
        }
    });

//Displaying sub menu items on click with the loop
    mainMenuItems.forEach(function(menuItem){
        menuItem.addEventListener('click',function(){
            var x = menuItem.nextElementSibling;
            x.classList.toggle('sub-menu');
            x.classList.toggle('open');
        });
        })
    }
});









