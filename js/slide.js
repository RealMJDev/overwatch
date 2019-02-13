// const imgSlideContainer = document.querySelector('.hero-images-container');
// const slideImages = document.querySelectorAll('.hero-images-container img');

//Counter
// let counter = 1;
// const size = slideImages[0].clientWidth;

// imgSlideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Buttons
// const prevBtn = document.querySelector('.toggle-left');
// const nextBtn = document.querySelector('.toggle-right');

//Button Listeners
// nextBtn.addEventListener('click', function(){
//     imgSlideContainer.style.transition = 'transform 0.4 ease-in-out';
//     counter++;
//     imgSlideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', function(){
//     imgSlideContainer.style.transition = 'transform 0.4 ease-in-out';
//     counter--;
//     imgSlideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });


//Loop back after last image
// imgSlideContainer.addEventListener('transitionend', function(){
//     console.log(slideImages[counter]);
//     if (slideImages[counter].id == 'lastClone'){
//         console.log('lastClone');
//         imgSlideContainer.style.transition = 'none';
//         counter = slideImages.length -2;
//         imgSlideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });



// $(document).ready(function(){
//     $('.hero-images-container').slick({
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: (3000),
//         arrows: false,
//     });
//   });