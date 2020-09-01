interface IMoklet { 
  a: String,
  b: Number,
  c: [String]
}
const a: string = "Arie";
let c: string[] = ["Arie", "Jack"];

function someFunction(params1: number, params2: number) { 
  console.log("Somefunction called")
  return params1 + params2;
}
someFunction(1,2);