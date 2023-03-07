
let productDOM=document.querySelector(".products");
let noProductDOM=document.querySelector(".noProducts");

function drawFavoritProductsUI(allproducts=[]){

    if(JSON.parse(localStorage.getItem("productFavorite")).length === 0){
        noProductDOM.innerHTML="There is No Products To Show!! "
    }

    let products= JSON.parse(localStorage.getItem("productFavorite")) || allproducts;
    let productsUI = products.map((e)=>{
        return `
            <div class="product-item">
                <img src="${e.imageUrl}" class="product-item-img">
                <div class="product-item-desc">
                   <a onclick="saveItemData(${e.id})">${e.title}</a>
                    <p> ${e.desc}</p>
                    <span>Size: ${e.size}</span><br>
                    <span>Quantity: ${e.qty}</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeFromFavorites(${e.id})">Remove From Favorite</button>
                </div>
            </div>
        `
    });

    productDOM.innerHTML=productsUI.join("");
}

drawFavoritProductsUI();

function removeFromFavorites(id){
    let productFavorite=localStorage.getItem('productFavorite');
    if(productFavorite){
        let items= JSON.parse(productFavorite);
        let filteredItems = items.filter((item)=>item.id !==id);
        localStorage.setItem("productFavorite",JSON.stringify(filteredItems));
        drawFavoritProductsUI(filteredItems);

    }
}


// function saveItemData(id){
//     localStorage.setItem("productId",id);
//     window.location="productDetails.html";
// }