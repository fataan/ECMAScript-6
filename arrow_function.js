/*
	Arrow Function Expression
	fungsi		= mempersingkat keyword this
	penulisan	=  () => 
	cocok digunakan sebagai parameter pada sebuah function.
*/



// const cetakNama = nama => `Halo nama saya ${nama}`;
// console.log(cetakNama("fatan")); //Halo nama saya fatan

// const profile = (nama, umur) => `Halo nama saya ${nama}, umur ${umur}`;
// console.log(profile("fatan", 15)); //Halo nama saya fatan, umur 15

// const sayHello = (bahasa) => {
// 	if (bahasa === "indonesia") {
// 		return "Halo";
// 	}else{
// 		return "Hai";
// 	};
// };
// console.log(sayHello("indonesia")); //Halo



/*
	aturan
	- parameter jika lebih dari 1 atau tidak ada wajib di tulis tanda kurung "()"
	- jika hanya 1 expression atau statement menggunakan tanda kurung kurawal "{}" optional dan tidak perlu di return
	- jika lebih dari 1 statement wajib menggunakan kurung kurawal dan di return (seperti sayHello())
*/



// function Profile(nama, umur, status) {
// 	this.nama = nama;
// 	this.umur = umur;
// 	this.status = status;

// 	setInterval(()=> console.log(this), 1000);
// };

// const fatan = new Profile("fatan", 15, "pelajar");

/*
	behivor arrow function
	- this menunjukan ke tempat dimana arrow function itu berada
*/