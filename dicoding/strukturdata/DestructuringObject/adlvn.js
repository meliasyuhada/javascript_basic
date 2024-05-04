// Assigning to Different Local Variable Names

/*
Sampai saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variabel lokal, kita perlu 
menyeragamkan penamaan variabel lokal dengan properti object-nya. Namun, sebenarnya dalam proses 
destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda. ES6 menyediakan 
sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. Penulisannya mirip seperti ketika kita 
membuat properti beserta nilainya pada object.
*/

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
  John
  Doe
  18
  */
