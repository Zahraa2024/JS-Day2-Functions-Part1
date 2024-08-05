// task1 //
function printName() {
  console.log("Zahraa Alhusaini");
}
printName();

// task2 //
function printAge(year) {
  console.log(`Age is ${2024 - year}`);
}
printAge(1993);

// task3 //

function printAgeAndName(year1, name1) {
  console.log(` Hello ${name1} you are ${2024 - year1} old`);
}
printAgeAndName(1993, "Zahraa");

// task4 //
function printHello(name2, language) {
  if (language == "en") {
    console.log(`Hello ${name2}`);
  }
  if (language == "es") {
    console.log(`Hola ${name2}`);
  }
  if (language == "fr") {
    console.log(`Bonjour ${name2}`);
  }
  if (language == "tr") {
    console.log(`Merhaba ${name2}`);
  }
}
printHello("zahraa", "tr");

// task5 //
function printMax(no1, no2) {
if (no1==no2){
    console.log("both numbers are equal");
  }
if (no1 > no2) {
    console.log(` The bigger number is ${no1}`);
  } 
  if (no2 > no1) {
    console.log(` The bigger number is ${no2}`);
}
}
printMax(9,11);
