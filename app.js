// // ================== PRODUCTS ==================
var products = [
    { id: 1, name: "Black Gemstone Earrings", price: 500, image: "images/img (1).png", description: "oval-cut black stones hoops." },
    { id: 2, name: "Golden stud earring", price: 400, image: "images/img (39).png", description: "elegant golden square cut diamond earring " },
    { id: 3, name: "Silver stud earring", price: 450, image: "images/img (11).png", description: "silver leaf stud earring" },
    { id: 4, name: "Silver flower bracelet", price: 400, image: "images/img (22).png", description: "delicate flower shaped charm bracelet with zircon chain" }, 
    { id: 5, name: "Contemporary Geometric Necklace", price: 550, image: "images/img (2).png", description: "Red square accents and textured gold-tone beads on a black cord." },
    { id: 6, name: "Butterfly Jewelry Set", price: 800, image: "images/img (3).png", description: "Butterfly jewellery set with small white crystals and stud tops" },
    { id: 7, name: "Diamond Eternity Ring", price: 500, image: "images/img (4).png", description: "Stunning diamond eternity ring" },
    { id: 8, name: "Infinity Charm Bracelet", price: 1200, image: "images/img (5).png", description: "A delicate rose-gold chain infinity style charm" },
    { id: 9, name: "Pearl Drop Jhumkas", price: 400, image: "images/img (7).png", description: "Ornate matte-gold teardrop earrings" },
    { id: 10,name: "Celestial Bangle",price: 600, image: "images/img (6).png", description: "A rose-gold toned cuff featuring a sunburst centerpiece" },
    { id: 11, name: "Floral Wreath Studs", price: 400, image: "images/img (8).png", description: "Intricate earrings featuring white floral accents and leaf stone" },
    { id: 12, name: "Morganite Jewelry Set", price: 1200, image: "images/img (9).png", description: "A sophisticated silver-toned set featuring oval-cut peach stones necklace with studs." }, 
    { id: 13, name: "Geometric Pavé Ring", price: 500, image: "images/img (10).png", description:"A modern silver diamond-shaped ring" },
    { id : 14,name:"Pearl-Trimmed Diamond Hoops",price :600,image:"images/img (12).png",description:"Bold, square-shaped statement earrings"},
    { id : 15,name:"Obsidian Statement Choker",price :800,image:"images/img (13).png",description:"A chunky gold-tone chain necklace"},
    { id : 16,name:"Floral Pearl Hoops",price :600,image:"images/img (14).png",description:"Enchanting white floral blossoms earrings "},
    { id : 17,name:"Rose Gold Cluster Ring",price :500,image:"images/img (15).png",description:"A sophisticated rose-gold band topped"},
    { id: 18, name: "Leafy Vine Earrings", price: 700, image:"images/img (16).png", description:"Golden leaf hoop earrings"},
    { id : 19,name:"Emerald Drop Pearls",price :800,image:"images/img (38).png",description:"Striking drop earrings featuring silver pavé tops, oval emerald-green stones"},
    { id: 20, name: "Twisted Gold Hoops", price: 700, image: "images/img (18).png", description: "Classic gold-toned earrings featuring a textured, rope-style twisted design." },
    { id: 21, name: "Floral Diamond Ring", price: 800, image: "images/img (19).png", description: "A stunning statement ring featuring a multi-layered floral cluster " },    
    { id: 22, name: "Oval Emerald Studs", price: 600, image: "images/img (20).png", description: "Premium handcrafted emerald studs" },
    { id: 23, name: "Silver Sunburst bracelet", price: 450, image: "images/img (21).png", description: "A delicate silver charm bracelet" },
    { id: 24, name: "Halo Rose Gold Ring", price: 500, image: "images/img (26).png", description: "Elegant rose gold ring with a halo of diamonds" },
    { id: 25, name: "Filigree Mirror Banglest", price: 1000, image: "images/img (23).png", description: "Traditional silver bangles featuring intricate filigree work" },
    { id: 26, name: "Cherry Charm Hoops", price: 600, image: "images/img (24).png", description: "Delicate gold hoops featuring a single, vibrant red cherry" },
    { id: 27, name: "Elegant silver ring", price: 600, image: "images/img (25).png", description: "A classic silver ring with a polished finish and floral design" },
    { id: 28, name: "Amber Crystal Arc Earrings", price: 700, image: "images/img (17).png", description: "Stunning semi-circular statement earrings with sophisticated design" },
    { id: 29, name: "Silver Bloom Statement Choker", price: 1200, image: "images/img (27).png", description: "A bold, chunky silver-tone chain with a floral motif" },
    { id: 30, name: "Rose Gold Sunburst Ring", price: 500, image: "images/img (30).png", description: "A breathtaking rose-gold ring featuring a multi-layered sunburst cluster" },
    { id: 31, name: "Oval Pavé Statement Ring", price: 600, image: "images/img (31).png", description: "A stunning ring with a pave diamond setting in an oval shape" },
    { id: 32, name: "Midnight Bloom Bib Necklace", price: 1000, image: "images/img (34).png", description: "A stunning necklace featuring a midnight blue gemstone cluster" },
    { id: 33, name: "Obsidian Leaf Chain Choker", price: 900, image: "images/img (35).png", description: "A bold, chunky black-toned chain with a leafy motif" },
    { id: 34, name: "Art Deco Crystal Drops", price: 750, image: "images/img (37).png", description: "Multi-faceted pink crystal earrings in a striking art deco design" },
    { id: 35, name: "Orange Halo Studs", price: 500, image: "images/img (40).png", description: "Vibrant orange cushion-cut stones framed by a brilliant silver-tone halo." },
    { id: 36, name: "Bridal Marquise Cascades", price: 1400, image: "images/img (41).png", description: "Elegant cascading earrings featuring marquise-cut crystals ending" },
    { id: 37, name: "Luxe Infinity Bangle", price: 500, image: "images/img (42).png", description: "A luxurious bangle with an infinity symbol design" },
    { id: 38, name: "Teal Crystal Statement Studs", price: 800, image: "images/img (43).png", description: "Elegant earrings featuring a star-shaped teal crystal design" },
    { id: 39, name: "Floral silver Ring", price: 900, image: "images/img (45).png", description: "A delicate silver ring featuring a floral motif and a polished finish" },
    { id: 40, name: "Blush Pearl Vine Necklace", price: 600, image: "images/img (46).png", description: "A delicate necklace featuring a blush-toned pearl vine design" },
    { id: 41, name: "Bohemian Rose Gold Tassel Hoops", price: 1100, image: "images/img (47).png", description: "Delicate rose gold hoops with tassels for a bohemian look" },
 ];


var cart = JSON.parse(localStorage.getItem("cart")) || [];
function getClientId() {
    var id = localStorage.getItem('cartOwnerId');
    if (!id) {
        id = 'cid_' + Date.now() + '_' + Math.random().toString(36).slice(2,9);
        localStorage.setItem('cartOwnerId', id);
    }
    return id;
}

function saveCartToFirebase() {
    if (typeof firebase === 'undefined' || !firebase.database) return;
    try {
        var id = getClientId();
        firebase.database().ref('carts/' + id).set({ cart: cart, updated: Date.now() });
    } catch (err) {
        console.warn('Failed to save cart to Firebase', err);
    }
}

var CartHelper = {
    load: function() {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
    },
    save: function() {
        localStorage.setItem('cart', JSON.stringify(cart));
        try { saveCartToFirebase(); } catch (e) {}
    },
    addItem: function(item) {
        var found = -1;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) { found = i; break; }
        }
        if (found > -1) {
            cart[found].qty += item.qty;
        } else {
            cart.push(item);
        }
        this.save();
    },
    changeQtyByIndex: function(index, delta) {
        if (!cart[index]) return;
        cart[index].qty = Math.max(1, cart[index].qty + delta);
        this.save();
    },
    removeByIndex: function(index) {
        cart.splice(index, 1);
        this.save();
    },
    clear: function() {
        cart = [];
        localStorage.removeItem('cart');
        try { saveCartToFirebase(); } catch (e) {}
    },
    totalQty: function() {
        var t = 0;
        for (var i = 0; i < cart.length; i++) t += cart[i].qty;
        return t;
    },
    totalPrice: function() {
        var t = 0;
        for (var i = 0; i < cart.length; i++) t += cart[i].price * cart[i].qty;
        return t;
    }
};

function updateCartCount() {
    var countElem = document.getElementById("cart-count");
    if (!countElem) return;
    countElem.innerText = CartHelper.totalQty();
}
updateCartCount();

var productsDiv = document.getElementById("product-list");
var activeCategory = 'all';
var activeSearch = '';

function formatPrice(amount) {
    return 'Rs. ' + amount;
}

function renderProducts() {
    if (!productsDiv) return;
    productsDiv.innerHTML = '';

    var filtered = products.filter(function(p) {
        var passCat = (activeCategory === 'all') || (p.category === activeCategory);
        var q = (activeSearch || '').trim().toLowerCase();
        var passSearch = !q || (p.name && p.name.toLowerCase().includes(q)) || (p.description && p.description.toLowerCase().includes(q));
        return passCat && passSearch;
    });

    filtered.slice(0, 43).forEach(function(prod) {
        var card = `
            <div class="product-card" data-cat="${prod.category || ''}">
                <div class="product-media"><img src="${prod.image}" alt="${prod.name}"></div>
                <div class="product-info">
                    <h3>${prod.name}</h3>
                    <div class="meta-row"><span class="meta">${prod.description || ''}</span><br><br><span class="price">${formatPrice(prod.price)}</span></div>
                    <div class="card-actions"><a class="btn small" href="product.html?id=${prod.id}">View Details</a></div>
                </div>
            </div>
        `;
        productsDiv.innerHTML += card;
    });
}

function setupProductFilters() {
    var btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function(b) {
        b.addEventListener('click', function() {
            btns.forEach(function(x) { x.classList.remove('active'); });
            b.classList.add('active');
            activeCategory = b.getAttribute('data-cat') || 'all';
            renderProducts();
        });
    });

    var search = document.getElementById('collection-search');
    if (search) {
        search.addEventListener('input', function() {
            activeSearch = search.value || '';
            renderProducts();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupProductFilters();
});


function setupProductPage() {
    var params = new URLSearchParams(window.location.search);
    var productId = parseInt(params.get("id"), 10);
    if (!productId) return;

    var currentProduct = products.find(function(p){ return p.id === productId; });
    if (!currentProduct) return;

    var imgElem = document.getElementById("product-image");
    var nameElem = document.getElementById("product-name");
    var descElem = document.getElementById("product-desc");
    var priceElem = document.getElementById("product-price");
    var qtyElem = document.getElementById("qty");

    if (imgElem) imgElem.src = currentProduct.image;
    if (nameElem) nameElem.innerText = currentProduct.name;
    if (descElem) descElem.innerText = currentProduct.description;
    if (priceElem) priceElem.innerText = formatPrice(currentProduct.price);
    if (qtyElem) qtyElem.innerText = 1;

    // quantity kept in closure; window functions are global so HTML onclick works
    var quantity = 1;
    window.increaseQty = function() { quantity += 1; if (qtyElem) qtyElem.innerText = quantity; };
    window.decreaseQty = function() { if (quantity > 1) quantity -= 1; if (qtyElem) qtyElem.innerText = quantity; };

    window.addCurrentProductToCart = function() {
        CartHelper.addItem({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, qty: quantity });
        updateCartCount();
        alert('Product added to cart 💎');
    };
}

document.addEventListener('DOMContentLoaded', setupProductPage);

var cartDiv = document.getElementById("cart-items");
var totalPriceElem = document.getElementById("total-price");

function findProductImage(id) {
    var p = products.find(function(x){ return x.id === id; });
    return p ? p.image : '';
}

function renderCart() {
    if (!cartDiv) return;
    cartDiv.innerHTML = '';
    var total = 0;

    cart.forEach(function(item, index) {
        total += item.price * item.qty;
        var image = findProductImage(item.id);
        cartDiv.innerHTML += `
            <div class="cart-item">
                <img src="${image}">
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)}</p>
                <div class="qty-box">
                    <button onclick="changeQty(${index}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    if (totalPriceElem) totalPriceElem.innerText = total;
}
renderCart();

window.changeQty = function(index, delta) {
    CartHelper.changeQtyByIndex(index, delta);
    renderCart();
    updateCartCount();
};

window.removeItem = function(index) {
    CartHelper.removeByIndex(index);
    renderCart();
    updateCartCount();
};

function setupCheckout() {
    var checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value || '';

        var total = CartHelper.totalPrice();

        alert(`Thank you ${name || 'customer'}! Your order for Rs. ${total} is confirmed.`);
        CartHelper.clear();
        try { renderCart(); } catch (err) {}
        updateCartCount();
        window.location.href = 'home.html';
    });
}

document.addEventListener('DOMContentLoaded', setupCheckout);
