import { User } from "./models/User";

const user = new User({ name: "myname", age: 23 });

// user.set({ name: "newname", age: 999 });

// console.log(user.get("name"));
// console.log(user.get("age"));

user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("save", () => {
  console.log("Save was triggered");
});

user.trigger("save")
