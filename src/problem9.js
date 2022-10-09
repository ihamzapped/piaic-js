export default function problem10() {
  console.log("\n---------------- Output of Problem 10 ----------------");
  const names = ["Sahal", "Adil", "Bilal", "Hamza"];
  console.log("My Friends");
  names.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
  });
}
