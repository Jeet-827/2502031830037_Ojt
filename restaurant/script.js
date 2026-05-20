// AOS Initialization
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close menu on link click and update active state
navItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero-section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Reservation Form Handling
const resForm = document.querySelector('.reservation-form');
if (resForm) {
    resForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your reservation! We will confirm your table shortly.');
        resForm.reset();
    });
}

// ==========================================
// CART LOGIC
// ==========================================

let cart = [];

// DOM Elements
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartBadge = document.getElementById('cart-badge');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

cartIcon.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// Add to Cart Function
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price: parseFloat(price), quantity: 1 });
    }
    
    updateCartUI();
    
    // Optional: Visual feedback
    alert(`${name} added to cart!`);
}

// Event Listeners for Add Buttons
addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = e.target.getAttribute('data-price');
        addToCart(name, price);
    });
});

// Update Cart UI
function updateCartUI() {
    // Clear current items
    cartItemsContainer.innerHTML = '';
    
    let totalItems = 0;
    let totalPrice = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    } else {
        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">₹${item.price} x ${item.quantity}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn minus-btn" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn plus-btn" data-index="${index}">+</button>
                    <button class="cart-item-remove" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
    // Update Badge and Total
    cartBadge.innerText = totalItems;
    cartTotalPrice.innerText = `₹${totalPrice}`;
    
    attachCartControlListeners();
}

// Attach listeners to dynamically created cart buttons
function attachCartControlListeners() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const removeBtns = document.querySelectorAll('.cart-item-remove');
    
    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            updateCartUI();
        });
    });
    
    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart[index].quantity += 1;
            updateCartUI();
        });
    });
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Need closest button in case icon is clicked
            const index = e.target.closest('.cart-item-remove').getAttribute('data-index');
            cart.splice(index, 1);
            updateCartUI();
        });
    });
}

// Checkout Button
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Order placed successfully! Total amount: ${cartTotalPrice.innerText}`);
        cart = [];
        updateCartUI();
        toggleCart();
    }
});

// ==========================================
// MENU FILTER LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Toggle visibility of menu items with smooth fade-in
            menuItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    // Small delay to trigger the transition nicely
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 20);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.classList.add('hide');
                    }, 300);
                }
            });
        });
    });

    // Make sure all elements have active initial classes so they are visible on load
    menuItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
});

