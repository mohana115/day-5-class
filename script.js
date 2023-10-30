/*const fruits = ["🍎", "🍌","🍋", "🍍", "🍊" ]
//*without destructuring
const apple = fruits[0];
const bannana = fruits[1];
console.log(apple);
console.log(bannana);
//!with destructuring
const [apple,bannana,mango,pineapple,orange]= fruits;
console*/
//? array of objects destructruring
/*const groceryshop = [
   {item:"Apple",price: 25, category: "fruits"},
   {item: "slat", price: 50, category: "misc"},
   {item: "tomato",price: 120, category: "vegetable"}]
//*without destruturing
/*console.log(groceryshop);
console.log(groceryshop[0].item);
*/
//with desturturing
/*const [{item,price,category}]= groceryshop
console.log(item);
console.log(price);
console.log(category);
*/
/*const [{item,price,category}]= groceryshop
*/
//array and object desturturing
/*const person ={
    name: "john",
    location: ["chennai","madurai","trichy"]
}
*/
/*const order= {
    id: 1000,
    pizza: "farrmhouse"
}
console.log(order.id,order.pizza)
*/
//using shorthand property
/*const id =1000;
const pizza = "framhouse";
const order ={
    id,
    pizza
}
console.log(order);
*/

//template literals:-
//var a = 10;
//var b = 20;
/*console.log("the value of a is ",a +" "+"the value of b is ",b)
*/
//console.log(`the value of a is ${a}
//the value of b`)
//spread & rest opertor:-
//example 1
// const arr = ["guvi"];
// console.log(...arr);
//example 2
// const arr1 = ["bob","john","doe"]
// const arr2 = ["elisa","satya","leo"]
// const arr3 = [...arr1,...arr2]
// console.log(arr3);
//rest parametr:- it is used inside the function to consider the remaining value.
function test(a,b,...rest){
    let sum = 0;
    for(let i = 0;i<rest.length;i=i+1){
        sum = sum+rest[i];

    }    return sum;
}
console.log(test(12,13,14,15,16,17));





