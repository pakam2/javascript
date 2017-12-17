var Osoba = function (name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
};
Osoba.prototype.writename = function () {
  console.log(this.name);
};
