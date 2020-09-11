const navSlide = () => {
    const burger = document.querySelector('.burger');
    const list = document.querySelector('.nav-list');
    const listLinks = document.querySelectorAll('.nav-list li');
    const navDiv = document.querySelector('.nav-div');

    burger.addEventListener('click', () => {
        list.classList.toggle('list-active');
        navDiv.classList.toggle('display');
        listLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `listLinkFade 0.2s ease forwards ${index / 7 + .3 }s`;
                console.log(index / 5);
            }
        });
        burger.classList.toggle('toggle');
    });
};
navSlide();