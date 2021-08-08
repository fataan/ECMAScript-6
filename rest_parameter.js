/*
	rest parameter
	fungsi		= menggabungkan nilai array atau lebih tepatnya beberapa elements menjadi iterable object.
	penulisan	=  three consecutive dots (...)
	cocok digunakan sebagai parameter pada sebuah function.
*/

// tidak menggunakan rest parameter

// function sum() {
// 	let result = 0;
// 	for(let i = 0; i < arguments.length; i++) {
// 		result += arguments[i];
// 	};
// 	return result;
// };

// console.log(sum(1,2,3,4,5)); //15


// function sum(...numbers) {
//     let result = 0;
//     for(let number of numbers) {
//         result += number
//     };
//     return result;
// };
 
// console.log(sum(1,2,3,4,5)); //15


// rest parameter in destructuring
// const foods = ["sandwich", "cake", "pizza"];

// const [myFood, ...yourFood] = foods;
// console.log(myFood); //sandwich
// console.log(yourFood); //[cake,pizza]

// menggabungkan sisa values ke dalam variable menjadi sebuah array.