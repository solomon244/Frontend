// Rewrite the code below to use array destructuring instead of assigning each value to a variable.

let item = ["Egg", 24, 2];

 let itemName = item[0];
 let price = item[1];
 let quantity = item[2];


//ans
let [itemName, price, quantity] = item;
 console.log(item)

 /* 
 Write the destructuring assignment that reads:
  - 'name' property into the variable 'name'.
  - 'gender' property into the variable 'gender'.
  - 'age' property into the variable 'age'.
 */
let user = {
  name: "John",
  gender: "Male",
  age: 30,
};

// ans
 let { name, gender, age } = user;
console.log(user)
 /*
 Extract the first fruit from the array and assign it to the variable 'firstFruit'.
 Use javascript operator to collect the rest of the fruits and assign them to the variable 'otherFruits'.
 */
  const fruits = ["apple", "banana", "orange", "mango", "grape"];



//ans

 const [firstFruit, ...otherFruits] = fruits;
 console.log(firstFruit)

 /*
 given an array of product objects. Your task is to filter the products based on their 
 category and create two separate arrays: one containing 'electronicsProducts' and the 
 other containing 'groceriesProducts'.
*/

const products = [
  { name: "TV", category: "electronics", price: 500 },
   { name: "Laptop", category: "electronics", price: 1000 },
  { name: "Bananas", category: "groceries", price: 2 },
   { name: "Apples", category: "groceries", price: 3 },
  { name: "Phone", category: "electronics", price: 700 },
 ];


  //Ans
const electronicsProducts = products.filter(product=>product.category === 'electronics');
const groceriesProducts = products.filter(product=>product.category === 'groceries');
console.log(electronicsProducts);
console.log(groceriesProducts);
 /*
    Using the above products array, create a new array containing only the names of the products.
 */

//Ans

 const productsName = products.map(product=>product.name);
console.log(productsName);

 /*given an array of names. Your task is to create a new array that includes all the names from the original array plus an additional name. Add a new names, "David" and "John" to the end of the new array.
 */

 const names = ["Alice", "Bob", "Charlie"];

 //ans

 const addNames = [...names, "David", "John"];

 console.log(addNames);
