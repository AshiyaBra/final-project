const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/final/json/cameraaudio.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("cat-content"); 

    info.cameras.forEach((camera) => {
        infoContainer.appendChild(getCameraInfo(camera));
    });

    const audioContainer = document.getElementById("audio");
    info.audios.forEach((audio)=>{
        audioContainer.appendChild(getAudioInfo(audio));
    });

    const trendingProductsContainer = document.getElementById("trending-products");
    info.trendingProducts.forEach((trendingProduct) => {
        trendingProductsContainer.appendChild(getTrendingProductInfo(trendingProduct));
    });

    
    const salesContainer = document.getElementById("sales");
    info.sales.forEach((sale) => {
        salesContainer.appendChild(getSaleInfo(sale));
    });
};

const getCameraInfo = (camera) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${camera.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${camera.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${camera.description}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${camera.image}`;

    const link = document.createElement("a");
    link.href = camera.link;
    
    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

    return section;
};

const getAudioInfo = (audio) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${audio.name}`;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${audio.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${audio.description}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${audio.image}`;

    const link = document.createElement("a");
    link.href = audio.link;
    
    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

    return section;
};

const getTrendingProductInfo = (trendingProduct) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${trendingProduct.name}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> $${trendingProduct.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${trendingProduct.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${trendingProduct.image}`;

    const link = document.createElement("a");
    link.href = trendingProduct.link;
    
    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

    return section;
};

const getSaleInfo = (sale) => {
    const section = document.createElement("section");

    const name = document.createElement("h2");
    name.innerHTML = `<strong>Name: </strong> ${sale.name}`;
    
    const oldPrice = document.createElement("p");
    oldPrice.innerHTML = `<strong>New Price: </strong> $${sale.oldPrice}`;

    const newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>Old Price: </strong> $${sale.newPrice}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${sale.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${sale.image}`;

    const link = document.createElement("a");
    link.href = sale.link;

    link.appendChild(img);
    section.appendChild(name);
    section.appendChild(oldPrice);
    section.appendChild(newPrice);
    section.appendChild(description);
    section.appendChild(link);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
