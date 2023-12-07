const toggleNav = () => {
    document.getElementById("nav-pages").classList.toggle("hide-small");
};

const getInfo = async () => {
    const url = "https://ashiyabra.github.io/projects/final/json/computer.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayInfo = async () => {
    const info = await getInfo();
    const infoContainer = document.getElementById("categories"); 

    
    info["categories"].forEach((category) => {
        infoContainer.appendChild(getCategoryInfo(category));
    });

    const trendingProductsContainer = document.getElementById("trending-products");
    info["trending-products"].forEach((trendingProduct) => {
        trendingProductsContainer.appendChild(getTrendingProductInfo(trendingProduct));
    });

    const salesContainer = document.getElementById("sales");
    info["sales"].forEach((sale) => {
        salesContainer.appendChild(getSaleInfo(sale));
    });
};

const getCategoryInfo = (category) => {
    const section = document.createElement("section");

    const title = document.createElement("h3");
    title.innerHTML = `${category.title}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${category.images}`;

    const link = document.createElement("a");
    link.href = category.link;
    


    link.appendChild(img);
    section.appendChild(title);
    section.appendChild(link);

    return section;
};

const getTrendingProductInfo = (trendingProduct) => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.innerHTML = ` ${trendingProduct.title}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> ${trendingProduct.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${trendingProduct.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${trendingProduct.image}`;

    const link = document.createElement("a");
    link.href = trendingProduct.link;
    


    link.appendChild(img);
    section.appendChild(title);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);

    return section;
};

const getSaleInfo = (sale) => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.innerHTML = ` ${sale.title}`;
    
    const price = document.createElement("p");
    price.innerHTML = `<strong> Price: </strong> ${sale.price}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${sale.facts}`;

    const img = document.createElement("img");
    img.src = `https://ashiyabra.github.io/projects/final/${sale.image}`;

    const link = document.createElement("a");
    link.href = sale.link;
    


    link.appendChild(img);
    section.appendChild(title);
    section.appendChild(price);
    section.appendChild(description);
    section.appendChild(link);
    
    return section;
};

window.onload = () => {
    document.getElementById("hamburger").addEventListener("click", toggleNav);
    displayInfo();
};
