/*=============================Menu==============================*/
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu_bar");
    const menu = document.querySelector("#menu_links");

    menuIcon.addEventListener("click", () => {
        if (!menu.classList.contains("opened")) {
            menu.classList.add("opened");
        } else {
            menu.classList.remove("opened");
        }
    });
});
/*=========================Hero-Content==========================*/
window.addEventListener('keydown', (event) => {
    const para = document.querySelector("#hero_para");
    const heading = document.querySelector("#hero_h1");

    if (event.key === 'ArrowDown') {
        heading.style.transform = "translateY(-180px)";
        para.style.transform = "translateY(-180px)";
        para.style.opacity = "1";
    }
});
/*=========================Hisory-Content==========================*/
document.addEventListener("DOMContentLoaded", () => {
    const dates = document.querySelectorAll(".line-v");
    const content = document.querySelectorAll(".event");

    dates.forEach((date, index) => {

        date.addEventListener("click", () => {

            dates.forEach((d) => {
                d.classList.remove("active");
            });

            content.forEach((box) => {
                box.classList.remove("active");
            });
            content[index].classList.add("active");
            date.classList.add("active");

        });
    });
});