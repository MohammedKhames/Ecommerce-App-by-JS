
let productDOM=document.querySelector(".products");
let noproductDOM=document.querySelector(".noProducts");

// display products
let drawProductsUI;

(drawProductsUI=function(products=[]){
    let myProducts=products.filter((item)=>item.isMe ==="Y");

    if(myProducts.length !=0){
    let productsUI = myProducts.map((e)=>{
        return `
            <div class="product-item" style="border: ${e.isMe==="Y" ? "2px solid green" : ""}">

                <img src="${e.imageUrl}" class="product-item-img">

                <div class="product-item-desc">
                    <a onclick="saveItemData(${e.id})">${e.title}</a>
                    <p> ${e.desc}</p>
                    <span>Size: ${e.size}</span>

                    <button class='edit-product' onclick='editProduct(${e.id})'>
                     Edit Product
                    </button>
                    <br>

                    <button class='edit-product' onclick='deleteProduct(${e.id})'>
                      Delete Product
                   </button>

                </div>

            </div>
        `
    });

    productDOM.innerHTML=productsUI.join("");
}
else{
    noproductDOM.innerHTML="No Products !!"
}
})(JSON.parse(localStorage.getItem("products")) || productsDB);




function editProduct(id){
    localStorage.setItem("editProduct",id);

    window.location="editProduct.html";

}

function deleteProduct(id){

    let products=JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts=products.filter((item)=>item.isMe==="Y");
    let filtered = myProducts.filter((i)=>i.id !==id);


    let clickedItem=myProducts.find((i)=>i.id===id);
    products=products.filter((i)=>i.id !== clickedItem.id);
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(filtered);




}