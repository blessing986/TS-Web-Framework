import { User } from "./models/User";

const user = new User({ name: "myname", age: 23 });

console.log(user.get("name"));
console.log(user.get("age"));
