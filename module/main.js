import state from "./state.js";

const checkStock = (baju, banyak) => {
    return new Promise((resolve, reject) => {
        if(state.baju[baju] >= banyak){
            state.baju[baju] -= banyak;
            resolve("stock cukup!");
        }else{  
            reject("maaf stock tidak cukup");
        };
    });
};

const checkOpen = time => {
    return new Promise((resolve, reject) => 
        (time >= state.isOpen.open && time <= state.isOpen.closed ) ? resolve("buka!") : reject("maaf kami sedang tutup"));
};

const beliBaju = (baju, banyak, waktu) =>
  checkOpen(waktu)
  .then(checkStock)
  .then(response => console.log(response))
  .catch(response => console.log(response));

