marvel_heros=["thor","ironman","widow"]
dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][2]);
//concat prints a new array
all_heros=marvel_heros.concat(dc_heros);
console.log(all_heros);

//another easy methods of doing this is
const all_new=[...marvel_heros,...dc_heros];
console.log(all_new)

const another=[1,2,3,[4,5],[6,[7,8],9],10];
const real_array=another.flat(Infinity);
console.log(real_array);

console.log(Array.from("devagarwal"));
console.log(Array.from({name:"fdev"}));
//gives an empty array
//interesting

let  score1=100;
let  score2=3200;
let  score3=10;
console.log(Array.of(score1,score2,score3))
//makes array form a set of elements

