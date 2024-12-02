const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('click', function () {
        alert('Vous avez cliqué sur l\'image d\'un produit!');
    });
});

const shopNowBtn = document.getElementById('shop-now-btn');
if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function () {
        alert('Bienvenue dans notre boutique de voitures et motos!');
    });
}

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        alert('Votre commande a bien passé!');
    });
});

const images = ["a.jpg", "b.jpg", "v.jpg"];
let currentIndex = 0;

function updateImage() {
    const currentImage = document.getElementById("currentImage");
    const imageCount = document.getElementById("imageCount");
    if (currentImage && imageCount) {
        currentImage.src = images[currentIndex];
        imageCount.innerText = `Image ${currentIndex + 1} sur ${images.length}`;
    }
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    });
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });
}

const addBtn = document.getElementById("addBtn");
const imageUrlInput = document.getElementById("imageUrl");
if (addBtn && imageUrlInput) {
    addBtn.addEventListener("click", () => {
        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl && /\.(jpeg|jpg|png|gif|bmp|webp)$/i.test(imageUrl)) {
            images.push(imageUrl);
            imageUrlInput.value = '';
            alert("Image ajoutée avec succès!");
            updateImage();
        } else {
            alert("Veuillez entrer une URL valide d'image (formats acceptés: jpg, png, gif, etc.).");
        }
    });
}

updateImage();
const products = [
    "Mercedes",
    "Yamaha",
    "Toyota",
    "Challenger demon",
    "Cross",
    "Bmw",
    "Kawasaki",
    "Dodge hellcat"
];
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const query = searchBar.value.trim();
    if (query === "") {
        alert("Veuillez entrer un nom de produit.");
        return;
    }

    if (products.includes(query)) {
        alert(`Le produit "${query}" est disponible.`);
    } else {
        alert(`Désolé, le produit "${query}" n'est pas disponible.`);
    }
});
const productFilter = document.getElementById('productFilter');
const productCards = document.querySelectorAll('.product-card');

productFilter.addEventListener('change', () => {
    const selectedCategory = productFilter.value;
    productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (selectedCategory === 'all' || category === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
