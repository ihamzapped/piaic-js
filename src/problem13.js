export default function problem14(name) {
  console.log("\n---------------- Output of Problem 14 ----------------");
  const guests = ["Hassan", "Ahad", "Arsalan"];
  const updatedGuestsList = guests.filter((element) => element != name);

  updatedGuestsList.forEach((element) => {
    console.log(`I would like to invite ${element} on dinner`);
  });

  console.log(`Unfortunately ${name} is not coming on dinner`);
}
