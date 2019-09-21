function deleteItem(e){
  this.parentElement.parentElement.remove()
}

function deleteNewButtons(){
var el = document.getElementById('row');
return el.remove();
}


function getTotalPrice() {
  const products = document.querySelectorAll(".container")
  let total = 0
  const totalPrice = Array.from(products).forEach((product) => {
    const price = product.querySelector(".price-tag span")
    const quantity = product.querySelector("input").value
    const priceNumber = Number(price.innerText.replace("$",""))
    const totalProduct = priceNumber*quantity
    
    total += totalProduct
    product.querySelector(".total-product").innerText = `$${totalProduct}`

  })

  const tot = document.querySelector(".total-cart").innerText = `$${total}`
}


function createNewItem(product,price){
  
const newProductName = document.querySelector(".name-create").value
  const newProductPrice = document.querySelector(".price-create").value
  

  //Crear un nuevo producto
  const newProductInputDiv = document.createElement("div")
  //Crear su precio
  const newPriceInputDiv = document.createElement("div")
  //Crear input cantidad
  const newQtyInputDiv = document.createElement("div")
  //Crear precio total
  const newTotalDiv = document.createElement("div")
  //crear boton
  const newDeleteDivButton= document.createElement("div")
  
  newProductInputDiv.setAttribute("class", "product-name")
  newPriceInputDiv.setAttribute("class", "price-tag")
  newQtyInputDiv.setAttribute("class", "input-field")
  newTotalDiv.setAttribute("class","total-product")

  const newProductInput = document.createElement("span")
  //newProductInput.setAttribute("id","span1")
  const newPriceInput = document.createElement("span")
  //newPriceInput.setAttribute("id","span1")
  const newQtyLabel = document.createElement("label")
  const newQtyInput = document.createElement("input")
  const newTotalSpan = document.createElement("span")
  const newDeleteButton=document.createElement("button")

  newQtyLabel.setAttribute("for", "QTY") 
  newQtyInput.setAttribute("name", "QTY")
  newQtyInput.setAttribute("type", "text")
  newQtyInput.setAttribute("placeholder", "0")
  newDeleteButton.setAttribute("class","btn-delete")
  newDeleteButton.setAttribute("onclick","deleteNewButtons()")
  //Me he quedado haciendo el input de la cantidad y su label


  newProductInputDiv.appendChild(newProductInput)
  newPriceInputDiv.appendChild(newPriceInput)
  newQtyInputDiv.appendChild(newQtyLabel)
  newQtyInputDiv.appendChild(newQtyInput)
  newTotalDiv.appendChild(newTotalSpan)
  newDeleteDivButton.appendChild(newDeleteButton)

  const node = document.createTextNode(newProductName);
  const nodePr = document.createTextNode(`$${newProductPrice}`);
  const nodeQty = document.createTextNode("QTY");
  const nodeTotal = document.createTextNode("$0,00");
  const nodeDelete=document.createTextNode("Delete");

  newProductInput.appendChild(node);
  newPriceInput.appendChild(nodePr);
  newQtyLabel.appendChild(nodeQty);
  newTotalSpan.appendChild(nodeTotal)
  newDeleteButton.appendChild(nodeDelete)

  const newItemRow = document.createElement("div")
  newItemRow.setAttribute("id", "row")
  newItemRow.setAttribute("class", "container")
  newItemRow.appendChild(newProductInputDiv)
  newItemRow.appendChild(newPriceInputDiv)
  newItemRow.appendChild(newQtyInputDiv)
  newItemRow.appendChild(newTotalDiv)
  newItemRow.appendChild(newDeleteDivButton)
  const father = document.getElementById("father")
  father.appendChild(newItemRow)


 
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create-button');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
