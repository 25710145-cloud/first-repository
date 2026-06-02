
 //undefined
 let x;
console.log(x);
//null
let user = null;
console.log(user);
//var, let, const
//var-Có thể gán lại
var name = "Tâm";
name = "Aviaty";
console.log(name);
//Toán tử 3 ngôi
const y = Number(prompt("Nhập giá trị y:"));
 if (y < 56) {
    console.log("Less than");
 } else if (y === 56) {
    console.log("Equal");
 } else {
    console.log("Greater than");
 }
 //Kiểm tra kiểu dữ liệu typeof
console.log(typeof "Aviaty"); // string
console.log(typeof 890); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
//
//Object
let myComputer = {
    type: "laptop",
    brand: "MSI",
    os: "Windows 11",
    graphicCard: "NVDIA",
};
console.log(myComputer.type);
console.log(myComputer.brand);
console.log(myComputer.os);
console.log(myComputer.graphicCard);

myComputer.status = "sleep";
myComputer["it is good"] = true;
console.log(myComputer.status);
console.log(myComputer["it is good"]); 
delete myComputer.brand;
delete myComputer["graphicCard"];
console.log(myComputer.brand);
console.log(myComputer["graphicCard"])

let letters = ["a","b"];
letters.push("c");
let length = letters.length;
letters[Math.floor(length/2)] = "d";
console.log(letters);
let first = letters.shift();
console.log(first);
letters.unshift(1,2);
console.log(letters);

function sumInput() {
      let n = prompt("Nhập vào một số: ");
      if (n === null || n === ""|| !isFinite(n)) {
         return 0;
      }
   return +n;
}
console.log(sumInput());