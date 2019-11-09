// 1.
let user = null;
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;
console.log(user);
// Error: "Cannot set property 'name' of null"



//2. 
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let sum = 0;
for (let x in fruit){
    if(fruit.hasOwnProperty(x)){
      sum += fruit[x];
    }
}
console.log(sum);

