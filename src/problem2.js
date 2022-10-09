export default function problem2() {
  console.log("---------------- Output of Problem 2 ----------------");
  const personName = "hami hamza";
  const nameArr = personName.split(" ");
  console.log(`Original Name: ${personName}`);
  console.log(`In UpperCase: ${personName.toUpperCase()}`);
  console.log(`In LowerCase: ${personName.toLowerCase()}`);
  console.log(
    `In TitleCase: ${capitalize(nameArr[0])} ${capitalize(nameArr[1])}`
  );
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
