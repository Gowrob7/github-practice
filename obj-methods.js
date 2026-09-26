const name = {name:'gowrob',age:'343',ph:'smaba'};
Object.freeze(name);
name.age = "344"
console.log(name)
delete name.name;
console.log(name);
const key = Object.keys(name);
console.log(key);
const values = Object.values(name);
console.log(values);
const events = Object.entries(name);
console.log(events);
