const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1518441902111-6f4d4a8c2f8e"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 2499,
        image: "https://images.unsplash.com/photo-1528701800489-20be3c6a0d05"
    },
    {
        id: 4,
        name: "Backpack",
        price: 1499,
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
    }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

function displayProducts() {
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.quantity})</span>
                <span>₹${item.price * item.quantity}</span>
            </div>
        `;
    });

    cartCount.textContent = count;
    cartTotal.textContent = total;
}

displayProducts();