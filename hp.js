const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/final/json/hp.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("seventy"); 

    info.seventys.forEach((seventy) => {
        infoContainer.appendChild(getSeventyInfo(seventy));
    });

    const eightysContainer = document.getElementById("eighty");
    info.eightys.forEach((eighty)=>{
        eightysContainer.appendChild(getEightyInfo(eighty));
    });

    const ninetysContainer = document.getElementById("ninety");
    info.ninetys.forEach((ninety) => {
        ninetysContainer.appendChild(getNinetyInfo(ninety));
    });

    
    const twoThousandsContainer = document.getElementById("two-thousands");
    info.twoThousands.forEach((twoThousand) => {
        twoThousandsContainer.appendChild(gettwoThousandsInfo(twoThousand));
    });
};

const getSeventyInfo = (seventy) => {
    const section = document.createElement("section");

    const title = document.createElement("h3"); 
    title.textContent = seventy.title;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Facts: </strong> ${seventy.facts}`;

    const img = document.createElement("img");
    img.src = seventy.image;

    section.appendChild(title);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

const getEightyInfo = (eighty) => {
    const section = document.createElement("section");

    const title = document.createElement("h3"); 
    title.textContent = eighty.title;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Facts: </strong> ${eighty.facts}`;

    const img = document.createElement("img");
    img.src = eighty.image;

    section.appendChild(title);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

const getNinetyInfo = (ninety) => {
    const section = document.createElement("section");

    const title = document.createElement("h3"); 
    title.textContent = ninety.title;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Facts: </strong> ${ninety.facts}`;

    const img = document.createElement("img");
    img.src = ninety.image;

    section.appendChild(title);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

const gettwoThousandsInfo = (twoThousand) => {
    const section = document.createElement("section");

    const title = document.createElement("h3"); 
    title.textContent = twoThousand.title;

    const facts = document.createElement("p");
    facts.innerHTML = `<strong>Facts: </strong> ${twoThousand.facts}`;

    const img = document.createElement("img");
    img.src = twoThousand.image;

    section.appendChild(title);
    section.appendChild(facts);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
