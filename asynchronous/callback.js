/*
	callback function.
	pengertian sama seperti hinger order function yaitu menirima parameter barupa function
	atau mengembalikan nilai berupa function.
*/


// Synchronous Callback

// function halo(nama) {
//   alert(`Halo ${nama}`);
// };

// function tampilkanNama(callback) {
//   const nama = prompt("Masukan nama:");
//   callback(nama);
// };

// tampilkanNama(halo)


// Asynchronous Callback

// tidak menggunakan callback
// const getCake = () => {
//  let cake = null;
//  console.log("Sedang membuat kue, silakan tunggu ....")
//  setTimeout(() => {
//    cake = "Kue Selesai!"
//  }, 3000)
//  return cake;
// }
 
// const cake = getCake();
// console.log(cake);
 
/*output:
Sedang membuat kue, silakan tunggu ....
null
*/


// menggunakan callback
// const getCake = callback => {
//   let cake = null;
//   console.log("Sedang membuat kue, silakan tunggu ....");
//   setTimeout(() => {
//     cake = "kue selesai!";
//     callback(cake);
//   }, 3000);
// };

// getCake(cake => console.log(cake));

/* output:
Sedang membuat kue, silakan tunggu ....
---- setelah 3 detik ----
Kue Selesai!
*/


// NOTE: method setTimeout dikerjakan dengan asynchronous.

// mengambil input dari prompt
// di faktorialkan 
// kembalikan ke alert













// random
// function getNumber(){
// 	return prompt('Masukan Angka');
// };

// const faktorial = (angka) => {
// 	const faktorial = angka => (angka != 1) ? angka * faktorial(angka - 1) : 1;
// 	const result = faktorial(angka);
// 	return alert(`hasil faktorial dari ${angka} adalah ${result}`);
// };

// faktorial(getNumber());