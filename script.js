
document.querySelector(".hamburger").addEventListener("click", function() {
   
    document.querySelector(".hamburger").classList.toggle("is-active");

    document.querySelector(".navbar__menu").classList.toggle("navbar__menu--active");

    document.querySelector(".top").classList.toggle("top--open");
});


window.addEventListener("scroll", function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= 60) {
        document.querySelector(".top").classList.add("top--scrolling");
    } else {
        document.querySelector(".top").classList.remove("top--scrolling");
    }
});



    const showPopupButton = document.getElementById('showPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

 
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });


    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    const form = document.getElementById('form');
    const btn = document.getElementById('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
    });
