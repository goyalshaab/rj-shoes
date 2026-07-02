// =======================================
// PRODUCT DATA
// =======================================

const products = [

{
id:1,
name:"Air Flex Runner",
category:"Running",
price:2499,
oldPrice:3999,
rating:4.5,
discount:38,
image:"image copy 7.png",
page:"view1.html"
},

{
id:2,
name:"Urban Street Sneaker",
category:"Sneakers",
price:20000,
oldPrice:40000,
rating:4.8,
discount:33,
image:"image copy 9.png",
page:"view2.html"
},

{
id:3,
name:"Velocity Pro",
category:"Sports",
price:10000,
oldPrice:20000,
rating:4.6,
discount:35,
image:"image copy 8.png",
page:"view3.html"
},

{
id:4,
name:"Classic White",
category:"Casual",
price:21000,
oldPrice:41000,
rating:4.4,
discount:30,
image:"image copy 10.png",
page:"view4.html"
},

{
id:5,
name:"Power Sprint",
category:"Running",
price:25000,
oldPrice:50000,
rating:4.7,
discount:34,
image:"image copy 11.png",
page:"view5.html"
},

{
id:6,
name:"Street Max",
category:"Sneakers",
price:15000,
oldPrice:30000,
rating:4.5,
discount:36,
image:"image copy 12.png",
page:"view6.html"
},

{
id:7,
name:"Motion X",
category:"Sports",
price:35000,
oldPrice:70000,
rating:4.9,
discount:40,
image:"image copy 13.png",
page:"view7.html"
},

{
id:8,
name:"Comfort Walk",
category:"Casual",
price:1899,
oldPrice:2899,
rating:4.3,
discount:34,
image:"image copy 14.png",
page:"view8.html"
},

{
id:9,
name:"Trail Hunter",
category:"Running",
price:30000,
oldPrice:60000,
rating:4.8,
discount:29,
image:"image copy 15.png",
page:"view9.html"
},

{
id:10,
name:"Daily Comfort",
category:"Casual",
price:5000,
oldPrice:10000,
rating:4.2,
discount:31,
image:"image copy 16.png",
page:"view10.html"
},

{
id:11,
name:"Elite Racer",
category:"Sports",
price:3500,
oldPrice:7000,
rating:5,
discount:32,
image:"image copy 17.png",
page:"view11.html"
},

{
id:12,
name:"Premium Leather Sneaker",
category:"Sneakers",
price:2000,
oldPrice:4000,
rating:4.9,
discount:33,
image:"image copy 18.png",
page:"view12.html"
}

];

// =======================================
// DOM
// =======================================

const productGrid =
document.getElementById("products");

const searchBox =
document.querySelector(".search-box input");


// =======================================
// DISPLAY PRODUCTS
// =======================================

function displayProducts(items){

productGrid.innerHTML="";

items.forEach(product=>{

productGrid.innerHTML += `

<div class="product-card"
onclick="window.location.href='${product.page}'"
style="cursor:pointer;">

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

<div class="discount">

-${product.discount}%

</div>

<div class="wishlist"
data-id="${product.id}"
onclick="event.stopPropagation()">

<i class="fa-regular fa-heart"></i>

</div>

</div>

<div class="product-info">

<h3>

${product.name}

</h3>

<div class="rating">

${getStars(product.rating)}

(${product.rating})

</div>

<div class="price">

<span class="new-price">

₹${product.price}

</span>

<span class="old-price">

₹${product.oldPrice}

</span>

</div>

<button
class="cart-btn"
data-id="${product.id}"
onclick="event.stopPropagation()">

Add to Cart

</button>

</div>

</div>

`;

});

}

displayProducts(products);
// =======================================
// STAR RATING
// =======================================

function getStars(rating){

let stars="";

for(let i=1;i<=5;i++){

if(i<=Math.floor(rating))

stars+="⭐";

else

stars+="☆";

}

return stars;

}


// =======================================
// SEARCH
// =======================================

searchBox.addEventListener("keyup", function(){

const keyword =
this.value.toLowerCase();

const filtered =
products.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword)

);

displayProducts(filtered);

});


// =======================================
// SORT PRODUCTS
// =======================================

const sortSelect =
document.getElementById("sort");

if(sortSelect){

sortSelect.addEventListener("change",function(){

let sorted=[...products];

if(this.value==="low"){

sorted.sort((a,b)=>a.price-b.price);

}

else if(this.value==="high"){

sorted.sort((a,b)=>b.price-a.price);

}

displayProducts(sorted);

});

}


// =======================================
// CATEGORY FILTER
// =======================================

const categoryButtons =
document.querySelectorAll(".category-card");

categoryButtons.forEach(button=>{

button.addEventListener("click",function(){

const category =
this.querySelector("h3").innerText;

const filtered =
products.filter(product=>

product.category.toLowerCase()===category.toLowerCase()

);

displayProducts(filtered);

});

});


// =======================================
// PRICE FILTER
// =======================================

const priceSlider =
document.querySelector('input[type="range"]');

if(priceSlider){

priceSlider.addEventListener("input",function(){

const value=parseInt(this.value);

const filtered=
products.filter(product=>product.price<=value);

displayProducts(filtered);

});

}


// =======================================
// RESET FILTERS
// =======================================

function resetProducts(){

displayProducts(products);

if(searchBox)

searchBox.value="";

if(sortSelect)

sortSelect.selectedIndex=0;

if(priceSlider)

priceSlider.value=5000;

}


// =======================================
// SHOW TOTAL PRODUCTS
// =======================================

function updateProductCount(items){

const count=document.getElementById("productCount");

if(count){

count.innerHTML=`${items.length} Products`;

}

}

updateProductCount(products);


// Update count whenever products change

const originalDisplay = displayProducts;

displayProducts = function(items){

originalDisplay(items);

updateProductCount(items);

};


// =======================================
// HERO SLIDER
// =======================================

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

}

if(nextBtn){

nextBtn.addEventListener("click",nextSlide);

}

if(prevBtn){

prevBtn.addEventListener("click",prevSlide);

}

setInterval(nextSlide,4000);


// =======================================
// MOBILE MENU
// =======================================

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}


// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// =======================================
// BACK TO TOP BUTTON
// =======================================

const backTop=document.getElementById("backTop");

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backTop.style.display="block";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


// =======================================
// QUICK VIEW
// =======================================

const modal=document.getElementById("quickModal");
const modalImage=document.getElementById("modalImage");
const modalName=document.getElementById("modalName");
const modalPrice=document.getElementById("modalPrice");
const closeModal=document.querySelector(".close-modal");

document.addEventListener("click",function(e){

if(e.target.classList.contains("quick-view")){

event.stopPropagation();

const id=Number(e.target.dataset.id);

const product=products.find(item=>item.id===id);

modalImage.src=product.image;
modalName.innerHTML=product.name;
modalPrice.innerHTML="₹"+product.price;

modal.style.display="flex";

}

});

if(closeModal){

closeModal.onclick=function(){

modal.style.display="none";

};

}

window.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

}

};
// =============================
// RJ SHOES LOGIN POPUP
// =============================

// Show popup when website opens
window.onload = function () {

    document.getElementById("loginPopup").style.display = "flex";

};

// Login Function
function loginUser() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please enter Email/Mobile and Password.");
        return;

    }

    // Save login status
    localStorage.setItem("rjLoggedIn", "true");

    // Hide popup
    document.getElementById("loginPopup").style.display = "none";

    alert("Welcome to RJ Shoes!");

}

// Close popup
function closeLogin() {

    document.getElementById("loginPopup").style.display = "none";

}

// Logout Function (Optional)
function logoutUser() {

    localStorage.removeItem("rjLoggedIn");
    location.reload();

}