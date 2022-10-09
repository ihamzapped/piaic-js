(function problem1() {
  console.log("---------------- Output of Problem 1 ----------------");
  const personName = "hami";
  console.log(`Hello ${personName}, would you like to learn some JS today?\n`);
})();

(function problem2() {
  console.log("---------------- Output of Problem 2 ----------------");
  const personName = "hami hamza";
  const nameArr = personName.split(" ");
  console.log(`Original Name: ${personName}`);
  console.log(`In UpperCase: ${personName.toUpperCase()}`);
  console.log(`In LowerCase: ${personName.toLowerCase()}`);
  console.log(
    `In TitleCase: ${capitalize(nameArr[0])} ${capitalize(nameArr[1])}`
  );
})();

(function problem3() {
  console.log("\n---------------- Output of Problem 3 ----------------");
  console.log('Virgil once said, "Fortune favors the bold."');
})();

(function problem4() {
  console.log("\n---------------- Output of Problem 4 ----------------");
  const authorName = "Virgil";
  const message = "Fortune favors the bold.";
  console.log(`${authorName} once said, "${message}"`);
})();

(function problem5() {
  console.log("\n---------------- Output of Problem 5 ----------------");
  const personName = "\tHami";
  console.log("With White Spaces:", personName);
  console.log("Without White Spaces:", personName.trim());
})();

(function problem6() {
  console.log("\n---------------- Output of Problem 6 ----------------");
  console.log(`Addition: ${4 + 4}`);
  console.log(`Subtraction: ${12 - 4}`);
  console.log(`Multiplication: ${2 * 4}`);
  console.log(`Division: ${16 / 2}`);
})();

(function problem7() {
  console.log("\n---------------- Output of Problem 7 ----------------");
  console.log(`Already done in Problem 6`);
})();

(function problem8() {
  console.log("\n---------------- Output of Problem 8 ----------------");
  const myFavNum = 10;
  console.log(`My favourite number is: ${myFavNum}`);
})();

(function problem9() {
  console.log("\n---------------- Output of Problem 9 ----------------");
  const names = ["Sahal", "Adil", "Bilal", "Hamza"];
  console.log("My Friends");
  names.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
  });
})();

(function problem10() {
  console.log("\n---------------- Output of Problem 10 ----------------");
  const names = ["Sahal", "Adil", "Bilal", "Hamza"];

  names.forEach((element, index) => {
    console.log(`Greetings to ${element}`);
  });
})();

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
