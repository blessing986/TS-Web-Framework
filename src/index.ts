// //////////////////////////////////////////////////

// // import { User } from "./models/User";

// // const user = new User({ name: "myname", age: 23 });

// // // user.set({ name: "newname", age: 999 });

// // // console.log(user.get("name"));
// // // console.log(user.get("age"));

// // user.on("change", () => {
// //   console.log("Change #1");
// // });
// // user.on("change", () => {
// //   console.log("Change #2");
// // });
// // user.on("save", () => {
// //   console.log("Save was triggered");
// // });

// // user.trigger("save")

// ////////////////////////////////////////////////

// // import axios from "axios";

// // // axios.post("http://localhost:3000/users", {
// // //   name: "myname",
// // //   age: 20,
// // // });

// // axios.get("http://localhost:3000/users/3be3");

// //////////////////////////////////////////////////

// import { User } from "./models/User";

// // const user = new User({ id: "3be3" });
// // const user = new User({ name: "new record", age: 0 });
// const user = User.buildUser({ id: "650a" });

// //////////////////////////////////////
// // user.fetch();

// // setTimeout(() => {
// //   console.log(user);
// // }, 4000);

// //////////////////////////////////////////
// //user.set({ name: "NEW NAME", age: 11 });
// // user.save();

// /////////////////////////////////////////
// // user.events.on("change", () => {
// //   console.log("change!");
// // });

// // user.events.trigger("change");

// /////////////////////////////////////////
// // console.log(user.get("name"));

// user.on("change", () => {
//   console.log(user);
// });

// // user.trigger("change");
// // user.set({ name: "New nane" });
// user.fetch();

//////////////////////////////////////////////
// import { User } from "./models/User";

// const collection = User.buildUserCollection();

// collection.on("change", () => {
//   console.log(collection);
// });

// collection.fetch();

import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));

userForm.render();

