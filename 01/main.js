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
/*=========================TimeLine-Content==========================*/
document.addEventListener("DOMContentLoaded", () => {
    const dates = document.querySelectorAll(".event-point");
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

/*=========================Tours-Content==========================*/

document.addEventListener("DOMContentLoaded", () => {
    const tours = document.querySelectorAll(".tour-button");
    const tourContents = document.querySelectorAll(".tour-details");

    tours.forEach((tour, index) => {
        tour.addEventListener("click", () => {
            tourContents.forEach((content) => {
                content.classList.remove("active");
            })
            tourContents[index].classList.add("active")
        })
    })


});

/*=========================dropdown Custom Tour==========================*/
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    const dropMenuBtn = document.getElementById("dropmenu_btn");
    const dropMenu = document.getElementById("dropmenu");


    dropMenuBtn.addEventListener("click", () => {

        options.forEach((option, index) => {
            option.style.visibility = "visible"
            option.style.top = (option.clientHeight * (index + 1)) + 'px';
        });
        document.addEventListener('click', function (event) {
            if (!dropMenu.contains(event.target)) {
                options.forEach((option, index) => {

                    option.style.top = "0";
                    option.style.visibility = "hidden"

                });
            }
        });

    })
})