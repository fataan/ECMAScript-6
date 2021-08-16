/*
	Promise(janji).
	sesuai arti katanya "janji", bisa ditepati atau diingkari.
	
	object yang meperesentasikan keberhasilan / kegagalan sebuah
	event yang asynchronous di masa yang akan datang.

	dalam promise terdapat 3 kondisi:
	- pending(janji sedang proses)
	- fulfilled(ditepati)
	- rejected(diingkari)

	callback (fulfilled / rejected / finally)
	aksi (then / catch / finally)
*/


// cara membuat
// const makeCoffee = new Promise((resolve, reject) => {
// 	const isCoffeMakerReady = true;
// 	if (isCoffeMakerReady) {
// 		setTimeout(() => resolve("kopi berhasil dibuat!"), 2000)
// 	}else {		
// 		setTimeout(() => reject("mesin kopi rusak!"), 2000)
// 	}
// });
// console.log(makeCoffee); //Promise	{<fulfilled>: "kopi berhasil dibuat!"}

// mengakses nilai asli resolve dan reject
// console.log('mulai');

// makeCoffee
// 	.finally(() => console.log("menuju mesin kopi"))
// 	.then(m => console.log(m)) //kopi berhasil dibuat!
// 	.catch(m => console.log(m)); //mesin kopi rusak!

// console.log('selesai');


/*
	- membuat promise harus dengan keyword "new".
	- promise wajib memiliki executorFunction.
	- executorFunction memiliki 2 parameter yaitu resolve dan reject.
		- resolve pending ke fulfilled
		- reject pending ke rejected
	- then dan catch untuk mengakses nilai asli dari resolve dan reject

*/







//-------------------------------------------------------------------------------------------------------------------






/*
	Promise berantai 
	promise yang saling membutuhkan satu sama lain(sesuai urutan).
*/

// Contoh ke-1

// const state = {
// 	"isOpen": {
// 		"open" : 9.00,
// 		"closed" : 17.00
// 	},
// 	"baju":{
// 		"pramuka": 20,
// 		"putih": 50,
// 		"batik": 10
// 	}
// }

// const checkStock = (baju, banyak) => {
// 	return new Promise((resolve, reject) => {
// 		if(state.baju[baju] >= banyak){
// 			state.baju[baju] -= banyak;
// 			resolve("stock cukup!");
// 		}else{	
// 			reject("maaf stock tidak cukup");
// 		};
// 	});
// };

// const checkOpen = time => {
// 	return new Promise((resolve, reject) => 
// 		(time >= state.isOpen.open && time <= state.isOpen.closed ) ? resolve("buka!") : reject("maaf kami sedang tutup"));
// };

// const beliBaju = (baju, banyak, waktu) =>
// 	checkOpen(waktu)
// 	.then(checkStock)
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));












// Contoh ke-2

// const state = {
//  isCoffeeMakerReady: true,
//  seedStocks: {
//    arabica: 250,
//    robusta: 60,
//    liberica: 80
//  }
// }
 
// const getSeeds = (type, miligrams) => {
//  return new Promise((resolve, reject) => {
//    if(state.seedStocks[type] >= miligrams) {
//      state.seedStocks[type] -= miligrams;
//      resolve("Biji kopi didapatkan!")
//    } else {
//      reject("Maaf stock kopi habis!")
//    }
//  });
// }
 
// const makeCoffee = seeds => {
//  return new Promise((resolve, reject) => {
//    if(state.isCoffeeMakerReady) {
//      resolve("Kopi berhasil dibuat!")
//    } else {
//      reject("Maaf mesin tidak dapat digunakan!");
//    }
//  })
// }
 
// const servingToTable = coffee => {
//  return new Promise(resolve => {
//    resolve("Pesanan kopi sudah selesai!")
//  })
// }
 
// function reserveACoffee(type, miligrams) {
//  getSeeds(type, miligrams)
//  .then(makeCoffee)
//  .then(servingToTable)
//  .then(resolvedValue => {
//    console.log(resolvedValue);
//  })
//  .catch(rejectedReason => {
//    console.log(rejectedReason);
//  })
// }
 
/* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
// reserveACoffee("liberica", 80);


//-------------------------------------------------------------------------------------------------------------------


/*
	Promise All
	menjalankan promise sekaligus tanpa mendulikan urutan.
*/

// const arabicaOrder = () => {
//  return new Promise(resolve => {
//    setTimeout(() => {
//      resolve("Kopi arabika selesai!")
//    }, 4000)
//  })
// }
 
// const robustaOrder = () => {
//  return new Promise(resolve => {
//    setTimeout(() => {
//      resolve("Kopi robusta selesai!")
//    }, 2000)
//  })
// }
 
// const libericaOrder = () => {
//  return new Promise(resolve => {
//    setTimeout(() => {
//      resolve("Kopi liberica selesai!")
//    }, 3000)
//  })
// }

// const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];
 
// Promise.all(promises)
// .then(resolvedValue => {
//  const [arabicaOrder, robustaOrder, libericaOrder] = resolvedValue; // destructuring
//  console.log(arabicaOrder);
//  console.log(robustaOrder);
//  console.log(libericaOrder);
// })
 
/* output:
[ 'Kopi arabika selesai!',
 'Kopi robusta selesai!',
 'Kopi liberica selesai!' ]
 */
