const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const previewBox = () =>{
    const back = document.getElementById("preview-back");
    const content = document.querySelector(".content");

    document.querySelectorAll(".items img").forEach((img) => {
        img.onclick = () => {
            const largeSrc = img.getAttribute("data-large-src");
            document.querySelector(".content img").src = largeSrc;
            back.style.display = "block";
            content.classList.add("slideShow");

            content.addEventListener("animationend", () => {
                content.classList.remove("slideShow");
                content.style.opacity = 1;
            });
        };
    });

    document.querySelector(".close").onclick = () => {
        back.style.display = "none";
        content.style.opacity = 0;
    };

    window.onclick = (event) => {
        if (event.target == back) {
            back.style.display = "none";
            content.style.opacity = 0;
        }
    };
};
window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    previewBox();
};
