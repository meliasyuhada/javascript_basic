// Default Values

/*
Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh 
array, maka variabel tersebut akan bernilai undefined. Contohnya:
*/

const favorites = ["Seafood"];
const [myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
undefined
*/

/*
Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang 
tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.
*/

const favorites1 = ["Seafood"];

const [myFood1, herFood1 = "Salad"] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/
