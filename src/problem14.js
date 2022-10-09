export default function problem15() {
  console.log("\n---------------- Output of Problem 15 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];

  guests.unshift("Sahal"); //Adds at start of array
  guests.splice(guests.length / 2, undefined, "Hamza"); // Adds at middle of array
  guests.push("Adil");

  guests.forEach((element) => {
    console.log(`I would like to invite ${element} on dinner`);
  });
  console.log("\nI found a bigger dinner table.");
}
