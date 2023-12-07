const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/final/json/index.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("main-sales"); 
    info.forEach((info) => {
        infoContainer.appendChild(getSectionInfo(info));
    });
};

const getSectionInfo = (info) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.innerHTML = info.name;


    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${info.description}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${info.image}`;

    const link = document.createElement("a");
    link.href = info.link;
    


    link.appendChild(img);
    section.appendChild(h2);
    section.appendChild(description);
    section.appendChild(link); 

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
