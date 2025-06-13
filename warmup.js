const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

//Filter users above age 30
const u_above30 = users.filter(user => user.age >30)
console.log("Users above 30:", u_above30);

//Transform the data to only include names
const Onlyname = users.map(user => user.name);
console.log("Names only:", Onlyname);

//Find the first user with role "admin" using array methods
const fRoleAdmin = users.find(user=>user.role === "admin");
console.log("First admin:", fRoleAdmin);

//Find the last user with role "admin" using array methods
const lRoleAdmin = [...users].reverse().find(user=>user.role === "admin");
console.log("Last admin:", lRoleAdmin);
//or
const copeyusers = users.slice();
const lRoleAdmin2 = copeyusers.reverse().find(user=>user.role === "admin");
console.log("Last admin:", lRoleAdmin2);

//Make deepCopy Function with example for nested objects
const nestedObj = { name: "yara", age: 23,  address: {city: "Giza",country: "Egypt"} };
function deepCopy(obj){
    return JSON.parse(JSON.stringify(nestedObj))
}
const copiedObj = deepCopy(nestedObj);
copiedObj.address.city = "Cairo";

console.log("Original obj:", nestedObj);
console.log("Copied obj:", copiedObj);