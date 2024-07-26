 //for of loop
 //mostly array specific loops
 const myarray=[1,2,3,4,5]
 const arr="devagarwal"
 for (const num of myarray) {
        console.log(num);
 }
 for (const chare of arr) {
    console.log(chare);
 }

 //maps
 const map=new Map()//key value pairs
 map.set('in',"india")
 map.set('us',"use")
 map.set('in',"india")//unique values hi enter hogi only
 //console.log(map);
 for (const m of map) {
    console.log(m);
 }
 for (const [key] of map) {
    console.log(key);
 }
 //objects are not iteratable using this technique
 
