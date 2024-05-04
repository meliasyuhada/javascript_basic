const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, age, isMale } = profile;

console.log(firstName);
console.log(age);
console.log(isMale);

/* output:
  John
  18
  undefined
  */

/*
Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak 
ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai 
default-nya seperti ini:

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
 
const { firstName, age, isMale = false } = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
output:
John
18
false

Jika nilai properti tidak ditemukan, maka nilai default akan diterapkan pada variabel.
*/
