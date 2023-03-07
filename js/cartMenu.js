
let cartProductDivDom=document.querySelector(".carts-products div");
let badgeDom=document.querySelector(".badge");
let shoppingCartIcon=document.querySelector(".shopping-cart");
let cartProductMenu=document.querySelector(".carts-products");




// check if there is items in localstorage

let addedItems= localStorage.getItem("productsInCart")
              ? JSON.parse(localStorage.getItem("productsInCart"))
              :[];

if(addedItems){
addedItems.map((e)=>{
cartProductDivDom.innerHTML+= `<p> ${e.title}  ${e.qty}</p>`
});
badgeDom.style.display="block";
badgeDom.innerHTML+=addedItems.length;
}


//open cart menu
shoppingCartIcon.addEventListener("click",openCartMenu);

//open cart menu
function openCartMenu(){
    if(cartProductDivDom.innerHTML !=""){

       if(cartProductMenu.style.display=="block"){

         cartProductMenu.style.display="none";
       }
       else{
         cartProductMenu.style.display="block";
       }
    }
}


