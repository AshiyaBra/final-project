const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/final/json/sales.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();

    const tabletContainer = document.getElementById("tablets");
    info.tablets.forEach((tablet) => {
        tabletContainer.appendChild(getTabletsInfo(tablet));
    });

    const phoneContainer = document.getElementById("phones");
    info.phones.forEach((phone) => {
        phoneContainer.appendChild(getPhonesInfo(phone));
    });

    const cameraContainer = document.getElementById("camera");
    info.cameras.forEach((camera) => {
        cameraContainer.appendChild(getCameraInfo(camera));
    });

    const audioContainer = document.getElementById("audio");
    info.audios.forEach((audio) => {
        audioContainer.appendChild(getAudioInfo(audio));
    });

    const gamingSystemsContainer = document.getElementById("gamingSystems");
    info.gamingSystems.forEach((gamingSystem) => {
        gamingSystemsContainer.appendChild(getGamingSystemsInfo(gamingSystem));
    });

    
    const computersContainer = document.getElementById("computers");
    info.computers.forEach((computer) => {
        computersContainer.appendChild(getComputersInfo(computer));
    });
};

const getTabletsInfo = (tablet) => {
    const section = document.createElement("section");

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${tablet.description}`;

    const img = document.createElement("img");
    img.src = tablet.image;

    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getPhonesInfo = (phone) => {
    const section = document.createElement("section");

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${phone.description}`;

    const img = document.createElement("img");
    img.src = phone.image;

    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getCameraInfo = (camera) => {
    const section = document.createElement("section");

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${camera.description}`;

    const img = document.createElement("img");
    img.src = camera.image;

    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getAudioInfo = (audio) => {
    const section = document.createElement("section");

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${audio.description}`;

    const img = document.createElement("img");
    img.src = audio.image;

    section.appendChild(description);
    section.appendChild(img);

    return section;
};

const getGamingSystemsInfo = (gamingSystem) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${gamingSystem.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${gamingSystem.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${gamingSystem.description}`;

    const img = document.createElement("img");
    img.src = gamingSystem.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);
    
    return section;
};

const getComputersInfo = (computer) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${computer.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${computer.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${computer.description}`;

    const img = document.createElement("img");
    img.src = computer.image;

    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(img);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
