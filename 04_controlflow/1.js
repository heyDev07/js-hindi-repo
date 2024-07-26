//=== checks data type also
//falsy values
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN //else all are falsy values
//truthy values surprise
//"0" is a truty
//'false', " ",[],{},function(){}
//Nullish coalescing operator(??):null operator
let val1;
val1=5??10
//used when null and undefined is there checks safety of null and undefined
//else assigns firsdt value
//val1=null??10
console.log(val1);


//terniary operatior
//condition?true:false

