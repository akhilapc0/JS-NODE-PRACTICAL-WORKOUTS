//weakset
// const ws = new WeakSet();

// const user = { name: "Akhila" };

// ws.add(user);

// console.log(ws.has(user));

//weakMap

const wm=new WeakMap();
const user={name:"Akhila"};
wm.set(user,"Admin")
console.log(wm.get(user))