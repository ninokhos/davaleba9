// სავარჯიშო 1 

let m = 160;
n = 17;

let x1 = didiricxvi(m, n);
//x არის მეტი რომელიცაა
function didiricxvi(m, n) {
   if (m > n) {
      x = m;
   }
   else if (n>m ) {
      x =n;
   } else {
      x = 0
   }
}
console.log(x);



// სავარჯიშო 2
addnumbers (12, 2);
function addnumbers(a,b) {
console.log("რიცხვების ჯამია", a+b);
}


// სავარჯიშო 3
function fullName(name, surname){
console.log("მე ვარ", name, surname);
}
fullName("Nino ", "Khositashvili");


// სავარჯიშო 4

let me ={
   myName: "Nino", 
   mySurname: "Khositashvili",
   fullName: function(){
   console.log(this.myName, this.mySurname)
}
}
me.fullName();




// სავარჯიშო 5

function multiply (n) {
 let namravli= 1;
   for (let i=1; i<=n; i++){
      namravli *= i[n];
      console.log("i=", i*n);
   }
}
multiply (3);


 // სავარჯიშო 6

let student = {
   firstName: "Nino",
   lastName: "Khositashvili",
age: 24, 
scores: [4, 7, 5, 3, 2],
fullName: function(){
   console.log(this.firstName, this.lastName)
}
}
student.fullName();

// სავარჯიშო 7

const arr = [4, 7, 5, 3, 2];
let sum = 0;
for (let i = 0; i < arr.length ; i++) {
  sum += arr[i];
}
console.log(sum);


// სავარჯიშო 8

console.log(student.firstName);
console.log(student.age);

//  ვიცი ბევრი სისულელე მიწერია :დ
