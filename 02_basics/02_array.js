const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

const all_heros = marvel_heros.concat(dc_heros)

// this is mostly use in real world 
const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5],6,7,[8,9,0]]
const another_new_array = another_array.flat(Infinity);
// console.log(another_new_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));