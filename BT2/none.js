 "use strict";
let message;
let name;

name = "Phạm Nguyễn Thanh Tâm";
message = name;

document.write(message);
let language;
language = "JavaScript"
console.log(language);

function ask(question, handleYes, handleNo){
    const answer = confirm(question);
    if (answer) {
        handleYes();
    }   else {
        handleNo();
    }
    }

    ask(
        "Bạn có phải là Robot không?",
        function() {
            console.log("Bạn đã chọn Yes!");
        },
        function() {
            console.log("Bạn đã chọn No!");
        }
    );
    let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
    let wellcome;
    if (isVietnamese) {
        wellcome = function(){ 
        console.log("Chào bạn!");
    };
} else {
    wellcome = function () {
        console.log("Hello!");
    };
}
wellcome();
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

console.log(myComputer["type"]);
console.log(myComputer["brand"]);
console.log(myComputer["os"]);
console.log(myComputer["graphicCard"]);

const value = prompt("Nhập vào số nguyên dương chẵn:", 0);
if (value % 2 === 0) {
    alert("Bạn đã nhập đúng!");
} else {
    alert("Bạn đã nhập sai!");
}

const x = Number(prompt("Nhập giá trị x:"));
 if (x < 56) {
    console.log("Less than");
 } else if (x === 56) {
    console.log("Equal");
 } else {
    console.log("Greater than");
 }