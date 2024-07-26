const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
//use of for in works for iteration of objects
for (const key in myobj) {
    console.log(key);
    console.log(myobj[key]);

}
const prog=["js","ra","is"]
//this defines the indexes
for (const key in prog) {
    console.log(key);
}

const map=new Map()
 map.set('in',"india")
 map.set('us',"use")
 map.set('in',"india")
 for (const m in map) {
    console.log(m);
 }//cannot be iterated using for in
 