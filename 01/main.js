/*===============Menu====================*/
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
/*===============Content====================*/

window.addEventListener('keydown', (event) => {
    const para = document.querySelector("#hero_para");
    const heading = document.querySelector("#hero_h1");

    if (event.key === 'ArrowDown') {
        heading.style.transform = "translateY(-180px)";
        para.style.transform = "translateY(-180px)";
        para.style.opacity = "1";
    }
});
