'use strict';



// const fruit = prompt ('fruit', 'apple');
// const count = prompt ('input count', 0);
// const list = {
//   [fruit]: count,
// };
// console.log (list [fruit]);
// // console.log (list.banana);



// // 1 метод


// const userKeys = Object.keys (user);
// const userKeys = Object.keys (user);

// const admin = Object.assign({},user);







// 2 метод
// for (const key in user){
//   admin[key] = user [key];
// }
// user.name = "Alex";
// admin.name = "Ben";



//delete user.age удалять что - то

// console.log (user.age);
// user.speak('ha-ha');


//копірується по силці

// user.surname = 'dodia';
// console.log (user);

// let admin = user;
// console.log (admin);

// let superUser = user;
// console.log (superUser);

// console.log (Object.values (user));


// let x = age;

// console.log ("name" in user);
// console.log ("x" in user);


// for (let key in user){
//   console.log (user);
// }

// копірується примітив

const user = {
  name: 'Alex',
  age: 25,
  isAdmin: false,
  ipconfig:{
ip: "123.121.121.211.44",
DNS: 2525255555555,
macAdres: "IU23G0215F",
  }
};

const admin ={...user};
user.name = "Alex";
admin.name = "Ben";

console.log(user);
console.log(admin);

//1 спосіб
// const deepCopy = (Obj) =>{
//   return newObj;
//   let clone = Object.assign({}, user);
// };

//2 спосіб
const deepCopy = (obj) => {
  let copyObj = {};
  for (let key in obj) {
    if (typeof obj[key] == 'obj') copyObj [key] = deepCopy (obj[key]);
    else copyObj [key] =  obj[key]; 
  }
  return copyObj;
}
console.log(deepCopy);