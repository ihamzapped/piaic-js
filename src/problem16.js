export default function problem17() {
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
}
