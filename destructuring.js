/*
	destructuring object dan array
	destructuring pada javaScript merupakan sintaks yang dapat mengeluarkan nilai dari array atau properties dari sebuah
	object ke dalam satuan yang lebih kecil.
*/




// tidak menggunakan destructuring

// pada object
// const profile = {
// 	name: "fatan",
// 	age: 15
// };

// const name = profile.name;
// const age = profile.age;
// console.log(name, age); //fatan 15



// pada array
// const foods = ["sandwich", "cake", "pizza"];

// const myFood = foods[0];
// const yourFood = foods[1];
// const ourFood = foods[2];
// console.log(myFood, yourFood, ourFood); //sandwich cake pizza



// swap values
// let a = 1;
// let b = 2;
// let temp;

// console.log(`a = ${a}, b = ${b}`) //a = 1, b = 2

// temp = a;
// a = b;
// b = temp;

// console.log(`a = ${a}, b = ${b}`) //a = 2, b = 1


//-------------------------------------------------------------------------------------------------------------------


// menggunakan destructuring

// pada object
// const profile = {
// 	name: "fatan",
// 	age: 15
// };

// const {name, age} = profile
// console.log(name, age); //fatan 15



// pada array
// const foods = ["sandwich", "cake", "pizza"];

// const [myFood, yourFood, ourFood] = foods;
// console.log(myFood, yourFood, ourFood); //sandwich cake pizza



// swap values
// let a = 1;
// let b = 2;

// console.log(`a = ${a}, b = ${b}`) //a = 1, b = 2;

// [a, b] = [b, a];

// console.log(`a = ${a}, b = ${b}`) //a = 2, b = 1;


//-------------------------------------------------------------------------------------------------------------------


// Destructuring Assignment

// pada object
// const profile = {
// 	name: "fatan",
// 	age: 15
// };

// let name = "qolbi";
// let age  = 16

// ({name, age} = profile);
// console.log(name, age); //fatan 15
// alasan menggunakan tanda "()" adalah block statement tidak bisa berada pada sisi kiri assignment



// pada array
// const foods = ["sandwich", "cake", "pizza"];

// let myFood = "rice";
// let yourFood = "bread";
// let ourFood = "wheat";

// [myFood, yourFood, ourFood] = foods;
// console.log(myFood, yourFood, ourFood); //sandwich cake pizza
// Contoh lain dari array : swap values(diatas ada)


//-------------------------------------------------------------------------------------------------------------------


// Default Values

// pada object
// const profile = {
// 	name: "fatan",
// 	age: 15;
// };

// const {name, age, isMale = false} = profile;
// console.log(name, age, isMale); //fatan 15 false



//pada array
// const foods = ["sandwich", "cake", "pizza"];

// const [myFood, yourFood, ourFood, herFood = "salad"] = foods;
// console.log(myFood, yourFood, ourFood, herFood); //sandwich cake pizza salad


//-------------------------------------------------------------------------------------------------------------------


// Assigning to Different Local Variable Names
// dapat merubah nama variable lokal menjadi berbeda dari property object
// const profile = {
// 	name: "fatan",
// 	age: 15
// };

// const {name: nama, age: umur} = profile;
// console.log(nama, umur); //fatan 15