// PRODUCTOS
const products = [
    {
        id: 1,
        name: "Campera Urban Street",
        price: 15900,
        img: "assets/img/Campera Urban Street.png",
        desc: "Campera de estilo urbano ideal para días frescos. Material premium."
    },
    {
        id: 2,
        name: "Remera Oversize Blanca",
        price: 7200,
        img: "assets/img/Remera Oversize Blanca.png",
        desc: "Remera oversize 100% algodón, cómoda y combinable."
    },
    {
        id: 3,
        name: "Pantalón Cargo Arena",
        price: 13400,
        img: "assets/img/Pantalón Cargo Arena.png",
        desc: "Pantalón cargo resistente, múltiples bolsillos y calce moderno."
    },
    {
        id: 4,
        name: "Buzo Hoodie Negro",
        price: 16800,
        img: "assets/img/Buzo Hoodie Negro.png",
        desc: "Buzo tipo hoodie con interior térmico. Perfecto para invierno."
    },
    {
        id: 5,
        name: "Zapatillas UrbanFit Pro",
        price: 24500,
        img: "assets/img/Zapatillas UrbanFit Pro.png",
        desc: "Zapatillas livianas, aptas para uso urbano y entrenamiento."
    },
    {
        id: 6,
        name: "Camisa Casual Denim",
        price: 11200,
        img: "assets/img/Camisa Casual Denim.png",
        desc: "Camisa denim clásica con un corte moderno y versátil."
    }
];

// CARRITO
let cart = [];

// Render HOME
const renderProducts = () => {
    const container = document.getElementById("product-list");
    container.innerHTML = products.map(p => `
        <div class="col-12 col-md-4 mb-4">
            <article class="card h-100 shadow-sm">

                <div class="card-img-box">
                    <img src="${p.img}" alt="${p.name}">
                </div>

                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="fw-bold">$${p.price}</p>
                    <button class="btn btn-primary" onclick="showDetail(${p.id})">Ver más</button>
                </div>
            </article>
        </div>
    `).join("");
};

renderProducts();

// Mostrar página
function showPage(page) {
    document.querySelectorAll(".page").forEach(sec => sec.classList.add("d-none"));
    document.getElementById(page).classList.remove("d-none");
}

// DETALLE
function showDetail(id) {
    const p = products.find(x => x.id === id);

    const detail = document.getElementById("product-detail");
    detail.innerHTML = `
        <article class="card shadow-sm">
            <div class="card-img-box">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <p class="fw-bold fs-4">$${p.price}</p>
                <p>${p.desc}</p>
                <button class="btn btn-success" onclick="addToCart(${p.id})">Agregar al carrito</button>
            </div>
        </article>
    `;

    showPage("detail");
}

// CARRITO
function addToCart(id) {
    cart.push(id);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const list = document.getElementById("cart-items");
    const empty = document.getElementById("cart-empty");

    if (cart.length === 0) {
        list.innerHTML = "";
        empty.classList.remove("d-none");
    } else {
        empty.classList.add("d-none");
        list.innerHTML = cart.map(id => {
            const prod = products.find(p => p.id === id);
            return `<li class="list-group-item d-flex justify-content-between">
                ${prod.name} <span>$${prod.price}</span>
            </li>`;
        }).join("");
    }
}
