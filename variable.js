/*
	mendeklarasikan variable di javascript sebelum ECMAScript 6 menggunakan keyword "var"
	tapi memiliki masalah salah satunya adalah hoisting
*/

// Hoisting(menaikan)
// nama = "fatan";
// console.log(nama); // "fatan"
// var nama;

/*
	menginisialisasi isi variable sebelum di deklarasikan dibahasa lain hal tersebut 
	akan eror namun di javascript tidak. Hasil dari console adalah "fatan" 
	isi variable tersebut. Hoisting/menaikan variable yang di deklarasikan ke atas.
	*dapat membuat beberapa developer kebingungan
*/

// Solusi
/* 
	const dan let
	kedua keyword tersebut harus di deklarasikan dulu untuk dapat di inisialisiasi
	dan mengakses variable tersebut.
*/


// const 
// nama = "fatan";
// console.log(nama); //SyntaxError: Missing initializer in const declaration
// const nama;

// let
// nama = "fatan";
// console.log(nama); //SyntaxError: Missing initializer in const declaration
// let nama;

/*
	behivor const
	- tidak dapat menginisialisasi ulang nilai variable
	- dapat mengubah

	behivor let
	- dapat menginisialisasi ulang nilai variable
	- dapat mengubah
*/


/*
	menginisialisasi ulang vs mengubah nilai varible

	menginisialisasi ulang
	const nama = ["fatan"];
	nama = ["fatan", 15];
	console.log(nama); //TypeError: Assignment to constant variable.

	mengubah 
	const nama = ["fatan"];
	nama.push(15);
	console.log(nama); //["fatan", 15]

*/



