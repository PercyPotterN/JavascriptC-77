var first_name ="Shadow";
var last_name ="The Hedgehog";
var a =10;
var b =15;

// String operations
console.log("****String operations");
console.log("First Name: " + first_name);
console.log("Last Name: " + last_name);

//Concat   "+"" operator on Strings
console.log("****String Concat operations");
var full_name =first_name.concat(" ", last_name);
console.log(full_name + " (**Using Concat)");
var full_name =first_name + " " + last_name;
console.log(full_name + " (**Using + operator)");

//Replace vs ReplaceAll
console.log("****String Replace operations");
var replacer_name = "My name is Shadow The Hedgehog and, Shadow is the fastest.";
console.log(replacer_name);

replacer_name = replacer_name.replace("Shadow","Sonic");
console.log(replacer_name + "(**Using replace)");

replacer_name = replacer_name.replaceAll("Shadow","Sonic");
console.log(replacer_name + " (**Using replaceAll)");

// Number + String operations
console.log("****Number and String operations");
console.log("1st Num: " + a);
console.log("2nd Num: " + b);

console.log(a);
console.log(b);
console.log(a+b);

var sum = a+b;
console.log(sum);

console.log("****String Length operations");
var length_of_name = full_name.length;

console.log("Full Name length: " + length_of_name);
console.log(full_name.length);
console.log(length);

sum = sum + full_name.length;
console.log("New sum: sum + full_name.length", sum);