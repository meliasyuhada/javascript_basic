const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, lastName, age } = profile;

console.log(firstName, lastName, age);

/* output:
  John Doe 18
  */

/*
Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. 
Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya, contohnya:

const { lastName } = profile;
*/
