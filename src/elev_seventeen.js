(function problem11() {
  console.log("\n---------------- Output of Problem 12 ----------------");
  const names = ["Lamborghini", "Audi", "Mercedes", "Toyota"];

  names.forEach((element) => {
    console.log(`I would like to own a ${element}`);
  });
})();

(function problem13() {
  console.log("\n---------------- Output of Problem 13 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];

  guests.forEach((element) => {
    console.log(`I would like to invite ${element} on dinner`);
  });
})();

(function problem14(name) {
  console.log("\n---------------- Output of Problem 14 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];
  const updatedGuestsList = guests.filter((element) => element != name);

  updatedGuestsList.forEach((element) => {
    console.log(`I would like to invite ${element} on dinner`);
  });

  console.log(`Unfortunately ${name} is not coming on dinner`);
})();

(function problem15() {
  console.log("\n---------------- Output of Problem 15 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];

  guests.unshift("Sahal"); //Adds at start of array
  guests.splice(guests.length / 2, undefined, "Hamza"); // Adds at middle of array
  guests.push("Adil");

  guests.forEach((element) => {
    console.log(`I would like to invite ${element} on dinner`);
  });
  console.log("\nI found a bigger dinner table.");
})();

(function problem16() {
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
})();

(function problem17() {
  console.log("\n---------------- Output of Problem 17 ----------------");
  const wishList = ["Turkey", "Baku", "Switzerland", "Germany", "Bangkok"];

  console.log("Original List");
  console.log(wishList);

  console.log("Printing in Alphabetical Order");
  console.log(wishList.slice().sort());

  console.log("Original List");
  console.log(wishList);

  console.log("Prining in Reverse Order");
  console.log(wishList.reverse());

  console.log("Reverse Again to get original form");
  console.log(wishList.reverse());

  console.log("Changing to Alphabetical Order");
  console.log(wishList.sort());

  console.log("Changing to reverse Order");
  console.log(wishList.reverse());
})();

(function problem18() {
  console.log("\n---------------- Output of Problem 18 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];
  console.log(`I am inviting ${guests.length} persons in my party!`);
})();
