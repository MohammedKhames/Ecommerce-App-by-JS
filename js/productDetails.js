let products= JSON.parse(localStorage.getItem("products"));
let productId=localStorage.getItem("productId");
let productDetails = products.find((e)=>e.id==productId);
console.log(productDetails)

let itemDom=document.querySelector(".item-details");
itemDom.innerHTML=`
<img src="${productDetails.imageUrl}">
<h2>${productDetails.title}</h2>
<p> ${productDetails.desc} </p>
<span> Size: ${productDetails.size}</span><br>
<span> Qunatity: ${productDetails.qty}</span><br><br>
<button class='edit-product' onclick='editProduct(${productId})'>
    Edit Product
</button><br><br>

`


//edit products

function editProduct(id){
    localStorage.setItem("editProduct",id);

    window.location="editProduct.html";

}