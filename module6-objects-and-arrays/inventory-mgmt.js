let inventory = 
[    { name: 'Keyboard', price: 2000, quantity: 3 },
    { name: 'Mouse', price: 1500, quantity: 2 },
 ];
console.log(inventory);

//adding new product
function addProduct(prod){
    inventory.push(prod);
}
addProduct({ name: 'stick', price: 500, quantity: 2 });
console.log(inventory);

//removing a product
function removeProduct(productName){
   inventory=inventory.filter(product => product.name !== productName);
}
removeProduct('Keyboard');
console.log(inventory);

//updating quantity of the product
function updateQuantity(productName,newQuantity){
   const p=inventory.find(product => product.name === productName);
   if(p){
   p.quantity=newQuantity;
   }
}
updateQuantity('stick',5);
console.log(inventory);

//returning total value
function totValue(){
    let tot=0;
    for(var item of inventory){
        tot += item.price * item.quantity;
    }
    return tot;
}
console.log("Total Inventory Value "+totValue());

//listing
function list(){
    for(var item of inventory){
        console.log(`${item.name} ${item.price} ${item.quantity}`)
    }
}
list();