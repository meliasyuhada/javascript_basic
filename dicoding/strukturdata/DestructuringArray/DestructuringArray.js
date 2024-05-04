// Destructuring Array

/*
Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } 
sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja 
berdasarkan posisi daripada penamaan propertinya. 
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

/*
Kode di atas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) 
nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, 
dan fourthFood. Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia 
dideklarasikan pada array.

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

Sebenarnya kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting adalah urutan ketika 
deklarasi variabelnya saja.

Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. 
Contohnya, jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk 
menampung nilai array pertama, kedua, atau pun keempat. Kita bisa melakukannya dengan membiarkan index 
array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal). Lebih lanjut, tanda koma (,) 
tetap diperlukan untuk menunjukkan posisi index-nya seperti ini:
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood1] = favorites;

console.log(thirdFood);

/* output:
Nugget
*/
