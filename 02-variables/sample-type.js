var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = "Kumar";
// 타입 오류 
// found = 0;
// grade = "A";
// firstName = false;
// lastName = 9.9;
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// 탬플릿 문자열
console.log("Hi ".concat(firstName, " ").concat(lastName));
