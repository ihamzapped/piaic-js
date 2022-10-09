export default function problem16() {
  console.log("\n---------------- Output of Problem 16 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan", "Sahal", "Hamza", "Adil"];
  console.log("I can invite only two people for dinner");

  const totalGuests = guests.length;
  for (let index = 0; index <= totalGuests - 3; index++) {
    console.log(`Hey! ${guests.pop()},I am sorry i can't invite  on dinner`);
  }
  guests.forEach((element) => {
    console.log(`Hey! ${element} you are still invited`);
  });
}
