const readline = require("readline-sync");

const angkaPertama = parseFloat (readline.question("Masukan Angka Pertama :"));
const operator = readline.question("Masukan Operator (+, -, *, /) :");
const angkaKedua = parseFloat (readline.question("Masukan Angka Kedua :"));

//validasi inputan
if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    //maka tampilkan error
    return console.log("Inputan tidak sesuai !!!");
} else {

      const hasil= execute(angkaPertama,angkaKedua,operator);
      console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama,angkaKedua,operator){
   
    switch(operator){
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua === 0){
                return console.log("Error:Tidak Bisa Dibagi Dengan Nol");
            }

            return angkaPertama / angkaKedua;
        case "%":
            return angkaPertama % angkaKedua;

        default:
            return console.log("operator tidak valid");
      }
    }
