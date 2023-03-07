
// define products

let productDOM=document.querySelector(".products");
let products=productsDB;



// display products
let drawProductsUI;
(drawProductsUI=function(products=[]){
    let productsUI = products.map((e)=>{
        return `
            <div class="product-item" style="border: ${e.isMe==="Y" ? "2px solid green" : ""}">
                <img src="${e.imageUrl}" class="product-item-img">
                <div class="product-item-desc">
                    <a onclick="saveItemData(${e.id})">${e.title}</a>
                    <p> ${e.desc}</p>
                    <span>Size: ${e.size}</span>

                    ${e.isMe==="Y"&& "<button class='edit-product' onclick='editProduct(" + e.id + ")'> Edit Product </button>"}
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="addedToCart(${e.id})">Add To Cart</button>
                    <i class=" favorite far fa-heart" style="color: ${e.liked==true?"red" : ""}" onclick="addedToFavorite(${e.id})"></i>
                </div>
            </div>
        `
    });

    productDOM.innerHTML=productsUI.join("");
})(JSON.parse(localStorage.getItem("products"))|| products);






//add to cart
function addedToCart(id){

        if(localStorage.getItem("username")){
            let products =JSON.parse(localStorage.getItem("products")) || productsDB;
            let product=products.find((ele)=>ele.id===id);
            let isProductInCart = addedItems.some(i=>i.id===product.id);

            if(isProductInCart){
                addedItems=addedItems.map((p)=>{
                    if(p.id===product.id)p.qty +=1;

                    return p;

                });
            }
            else{
                addedItems.push(product);
            }

            //ui
            cartProductDivDom.innerHTML="";
            addedItems.forEach((item)=>{
                cartProductDivDom.innerHTML+=`<p> ${item.title} <span class='item-qty'>${item.qty} </span></p>`;
            })

            //save data
            localStorage.setItem("productsInCart",JSON.stringify(addedItems));

             //add counter of items
            let catProductItems=document.querySelectorAll(".carts-products div p");
            badgeDom.style.display="block";
            badgeDom.innerHTML=catProductItems.length;
        }
        else{
            window.location="login.html"
        }

}

function getUniqueArr(arr,filterType){
    let unique=arr
    .map((item)=>item[filterType])
    .map((item,i,final)=>final.indexOf(item)===i &&i)
    .filter((item)=>arr[item])
    .map((item)=>arr[item]);

    return unique;
}




function saveItemData(id){
    localStorage.setItem("productId",id);
    window.location="productDetails.html";
}

// search function
let input = document.getElementById("search");

input.addEventListener("keyup",function(e){

    search(e.target.value, JSON.parse(localStorage.getItem("products")));

    if(e.target.value.trim()==="")
        drawProductsUI(JSON.parse(localStorage.getItem("products")));

});


function search(title,myArray){
    let arr =myArray.filter((item)=>item.title.toLowerCase().indexOf(title.toLowerCase())!==-1);
    drawProductsUI(arr);
}


//add to favorite

let favoriteItems= localStorage.getItem("productFavorite")
                 ? JSON.parse(localStorage.getItem("productFavorite"))
                 :[];
function addedToFavorite(id){
    if(localStorage.getItem("username")){
        let choosenItem=products.find((item)=>item.id===id);
        choosenItem.liked=true;
        favoriteItems=[...favoriteItems,choosenItem];
        let uniqueProducts= getUniqueArr(favoriteItems,"id");
        localStorage.setItem("productFavorite",JSON.stringify(uniqueProducts));
        products.map(item=>{
            if(item.id===choosenItem.id){
                item.liked=true
            }
        })
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products);
    }
    else{
        window.location="login.html";
    }
}



// filter products by size
let sizeFilter =document.getElementById("size-filter");
sizeFilter.addEventListener("change",getProductsBySize);

function getProductsBySize(e){
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products"))||products;

    if(val=="all"){
        drawProductsUI(products);
    }
    else{
        products=products.filter((i)=>i.size===val);
        drawProductsUI(products);
    }
}




//edit products

function editProduct(id){
    localStorage.setItem("editProduct",id);

    window.location="editProduct.html";

}

