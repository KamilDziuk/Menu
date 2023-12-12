
document.querySelector(".hamburger").addEventListener("click", function() {
   
    document.querySelector(".hamburger").classList.toggle("is-active");

    document.querySelector(".navbar__menu").classList.toggle("navbar__menu--active");

    document.querySelector(".top").classList.toggle("top--open");
});


window.addEventListener("scroll", function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= 60) {
        document.querySelector(".top").classList.add("top--scrolling");
    } else {
        document.querySelector(".top").classList.remove("top--scrolling");
    }
});



    let showPopupButton = document.getElementById('showPopup');
    let popup = document.getElementById('popup');
    let closePopupButton = document.getElementById('closePopup');

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

    let form = document.getElementById('form');
    let btn = document.getElementById('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
    });
