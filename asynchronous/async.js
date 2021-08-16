/*
  Syntax async and await.
  hanya dapat digunakan jika ada promise.
  async untuk memberitahukan kepada function dijalankan secara asynchronous.
  await untuk memberhentikan jalan eksekusi sebelum promise tersebut mengebalikan nilai resolve.


  Note: karena syntax async dijalankan secara asynchronous maka await hanya memberhentikan
  di scope function yang ia berada. Tidak menganggu runtime javascript sesunggunhnya(global).
*/






// promise
const getCoffee = () => {
 return new Promise((resolve, reject) => {
   const seeds = 0;
   setTimeout(() => {
     if(seeds >= 10) {
       resolve("Coffee didapatkan!");
     } else {
       reject("Biji kopi habis!")
     }
   }, 1000)
 })
}



// tanpa async dan await
// function makeCoffee() {
//  getCoffee()
//  .then(coffee => {
//    console.log(coffee)
//  })
// }
 

// // menggunakan async dan await
// async function makeCoffee() {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// makeCoffee();


/*
  menangani onRejected.
  await hanya mengembalikan nilai jika promise berhasil(resolve/onFulfilled).
  try block => onFulfilled
  catch block => onRejected
*/

// async function makeCoffee() {
//   try {
//     const coffee = await getCoffee();
//     console.log(coffee);
//   }
//   catch(resoponse) {
//     console.log(resoponse)
//   }
// }

// makeCoffee();






// async/await di promise berantai.
const state = {
 isCoffeeMakerReady: true,
 seedStocks: {
   arabica: 250,
   robusta: 60,
   liberica: 80
 }
}
 
const getSeeds = (type, miligrams) => {
 return new Promise((resolve, reject) => {
   if(state.seedStocks[type] >= miligrams) {
     state.seedStocks[type] -= miligrams;
     resolve("Biji kopi didapatkan!")
   } else {
     reject("Maaf stock kopi habis!")
   }
 });
}
 
const makeCoffee = seeds => {
 return new Promise((resolve, reject) => {
   if(state.isCoffeeMakerReady) {
     resolve("Kopi berhasil dibuat!")
   } else {
     reject("Maaf mesin tidak dapat digunakan!");
   }
 })
}
 
const servingToTable = coffee => {
 return new Promise(resolve => {
   resolve("Pesanan kopi sudah selesai!")
 })
}
 
async function reserveACoffee(type, miligrams) {
  try {
    const seeds = await getSeeds(type, miligrams);
    const make = await makeCoffee(seeds);
    const result = await servingToTable(make);
    console.log(result);
  }catch(response) {
    console.log(response)
  }
}

reserveACoffee("robusta", 0)