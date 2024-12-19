document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const formBtn = document.querySelector('.form-btn');
    const formContainer = document.querySelector('.form-container');

    menuToggle.addEventListener('click', () => {
        if (formContainer.classList.contains('show-form')) {
            formContainer.classList.remove('show-form');
        }
        nav.classList.toggle('show-menu');
        menuToggle.classList.toggle('active');
    });
    formBtn.addEventListener('click', () => {
        // Close menu if open
        if (nav.classList.contains('show-menu')) {
            nav.classList.remove('show-menu');
            menuToggle.classList.remove('active');
        }
        formContainer.classList.toggle('show-form');
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const chatList = document.querySelector(".chat-list ul");

    let isDragging = false;
    let startX;
    let scrollLeft;

    chatList.addEventListener("mousedown", (e) => {
        isDragging = true;
        chatList.style.cursor = "grabbing";
        startX = e.pageX - chatList.offsetLeft;
        scrollLeft = chatList.scrollLeft;
    });

    chatList.addEventListener("mouseleave", () => {
        isDragging = false;
        chatList.style.cursor = "grab";
    });

    chatList.addEventListener("mouseup", () => {
        isDragging = false;
        chatList.style.cursor = "grab";
    });

    chatList.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - chatList.offsetLeft;
        const walk = (x - startX) * 1.5; 
        chatList.scrollLeft = scrollLeft - walk;
    });

    chatList.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = chatList.scrollLeft;
    });

    chatList.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        chatList.scrollLeft = scrollLeft - walk;
    });
});
