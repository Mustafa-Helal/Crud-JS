




var productNameInput = document.getElementById("productNameInput");//Input Kolo
var productPriceInput = document.getElementById("productPriceInput");//Input Kolo
var ProductCategoryInput = document.getElementById("ProductCategoryInput");//Input Kolo
var productDescInput = document.getElementById("productDescInput");//Input Kolo
var mainBtn = document.getElementById("mainBtn");
var productsContainer;
if(localStorage.getItem("myProducts") == null)//zebon gedid //awl mara yft7
{
    productsContainer = [];
}
else
{
    productsContainer = JSON.parse( localStorage.getItem("myProducts"));//dh zbon 2adim leh 7agat fi el localStorage
    displayProducts();
}

function addProduct() {

    var product = {

        name: productNameInput.value,
        price: productPriceInput.value,
        category: ProductCategoryInput.value,
        desc: productDescInput.value
    };
    productsContainer.push(product);//1
    localStorage.setItem("myProducts" ,  JSON.stringify( productsContainer) );
   clearForm();
    displayProducts();
    console.log(productsContainer);
}
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    ProductCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProducts() {
    var cartoona = ``;

    for (var i = 0; i < productsContainer.length; i++) {
        cartoona += `<tr>
        <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].desc+`</td>
        <td> <button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning">update</button> </td>
        <td> <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button> </td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
};

function deleteProduct(productIndex)
{
    productsContainer.splice(productIndex,1);
    localStorage.setItem("myProducts" ,  JSON.stringify( productsContainer) );

    displayProducts();
}


function searchProduct(searchTerm)//sam
{
    var cartoona = ``;

    for(var i=0 ; i< productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true 
        || productsContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            cartoona += `<tr>
            <td>`+i+`</td>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td> <button class="btn btn-outline-warning">update</button> </td>
            <td> <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button> </td>
            </tr>`;
        }
        else
        {
            console.log("m4 Mawgod");
            //m4Mawgod
        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;

}


// function changeFormForUpdate(productIndex)
// {
//     productNameInput.value  = productsContainer[productIndex].name;
//     productPriceInput.value  = productsContainer[productIndex].price;
//     ProductCategoryInput.value  = productsContainer[productIndex].category;
//     productDescInput.value  = productsContainer[productIndex].desc;

//     mainBtn.innerHTML = "update";

// }
