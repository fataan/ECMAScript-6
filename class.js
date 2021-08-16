/*
	Class
	class merupakan bluprint yang dapat dikembangkan untuk membuat object.
*/

/*
	- menggunakan method constructor untuk mengenisialisasi property object.
	- keyword "this" merujuk ke instance dari class tersebut.
	- membuat instance wajib menggunakan keyword "new".
	- 
*/


// bluprint = template
// instance = object hasil realisasi dari sebuah blueprint
// Contoh blueprint & instance
// class Menu { // blueprint
// 	constructor(makanan, minuman) {
// 		this.makanan = [makanan];
// 		this.minuman = [minuman];
// 	}

// 	tambah(objek, jenis){
// 		(jenis === "makanan") ? this.makanan.push(objek) : this.minuman.push(objek);
// 		console.log("menu sudah diperbaruhi")
// 	}
// }

// //padang adalah instance
// const padang = new Menu("sate", "lemon");



//-------------------------------------------------------------------------------------------------------------------



// sebelum ES6(prototype)
// prototype
// function Car(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
// };
 
// Car.prototype.startEngines = function () {
//     console.log('Mobil dinyalakan...');
//     this.enginesActive = true;
// };
 
// Car.prototype.info = function () {
//     console.log("Manufacture: " + this.manufacture);
//     console.log("Color: " + this.color);
//     console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
// };
 
// const johnCar = new Car("Honda", "Red");
// johnCar.startEngines();
// johnCar.info();

/*
	output:
	Mobil dinyalakan...
	Manufacture: Honda
	Color: Red
	Engines: Active
*/


// sesudah ES6(class)
// class Car {
// 	constructor(manufacture, color) {
// 		this.manufacture = manufacture;
// 		this.color = color;
// 		this.enginesActive = false;
// 	};

// 	startEngines() {
// 		console.log("Mobil dinyalakan...");
// 		this.enginesActive = true;
// 	};

// 	info() {
// 		console.log(`Manufacture ${this.manufacture}`);
// 		console.log(`Color ${this.color}`);
// 		console.log(`Engines ${(this.enginesActive) ? "Active" : "Inactive"}`)
// 	}
// };

// const johnCar = new Car("Honda", "Red");
// johnCar.startEngines();
// johnCar.info();



//-------------------------------------------------------------------------------------------------------------------



// Property Accessor
// class Car {
//     constructor(manufacture, color) {
//         this.manufacture = manufacture;
//         this._color = color;
//         this.enginesActive = false;
//     };
    
//     get color() {
//         return `Warna mobil ${this._color}`;
//     }
    
//     set color(value) {
//         console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
//         this._color = value;
//     }
// }
 
// const johnCar = new Car("Honda", "Red");
// console.log(johnCar.color); // output -> Warna Mobil: Red
// johnCar.color = "White"; // Mengubah nilai properti color menjadi white
// console.log(johnCar.color); // output -> Warna Mobil: White

/*
	setter:
	untuk mengisi atau merubah data
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
	
	getter:
	mengambil data
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get


	Tanda underscore berfungsi sebagai tanda bahwa properti _color tidak sebaiknya diakses langsung.
	
*/



//-------------------------------------------------------------------------------------------------------------------



/*
	Static Method
	tidak dapat diakses oleh instance 
	
	keuntungan:
	- dapat diakses langsung dari class tersebut.
	- tidak perlu instance yang dapat menambah memori / mendeklasikan sebuah variable
*/

// class VehicleFactory {
//  static repair(vehicles) {
//     vehicles.forEach(vehicle => {
//       console.log(`Kendaraan ${vehicle} sedang melakukan perawatan`);
//     });
//   };
// };

// // cara mengakses method repair()
// VehicleFactory.repair(["mobil", "motor"]);



//-------------------------------------------------------------------------------------------------------------------



/*
	inheritance
	menggunakan keyword "extends",
	untuk mewarisi parent class ke child class.
	keyword "super" untuk mengakses parent.

	penulisan
	class ChildClass extends ParentClass {
    
	}
*/

// Parent Class
// class Vehicle {
//     constructor(licensePlate, manufacture) {
//         this.licensePlate = licensePlate;
//         this.manufacture = manufacture;
//         this.engineActive = false;
//     };
    
//     info() {
//         console.log(`Nomor Kendaraan: ${this.licensePlate}`);
//         console.log(`Manufacture: ${this.manufacture}`);
//         console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
//     };
    
// };


// Child Class
// class Car extends Vehicle {
// 	constructor(licensePlate, manufacture, wheels) {
// 		super(licensePlate, manufacture); // mengakses constructor parent
// 		this.wheels = wheels;
// 	};

// 	info() {
// 		super.info(); // mengakses method info() parent
// 		console.log(`Jumlah roda: ${this.wheels}`)
// 	};
// };


// const johnCar = new Car("H121S", "Honda", 4);
// johnCar.info();

/* output:
Nomor Kendaraan: H121S
Manufacture: Honda
Mesin: Inactive
Jumlah roda: 4
*/