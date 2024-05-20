//literals se singleton ni bnta //object.create
//constructor se singleton bnta hai
//object literals
const mysym=Symbol("key1")
const Jsuser={
    name:"Dev",
    "full name":"Dev Agarwal",
    [mysym]:"mykey1",
    age:"23",
    location:"jaipur",
    email:"295devraj",
    isloggedin: false,
    lastlogindays:["monday","sunday"]
}

console.log(Jsuser.email)
//console.log(Jsuser.full name) galat tarika hai ye krne kaa
console.log(Jsuser["full name"])

console.log(Jsuser[mysym])//symbol
console.log(Jsuser["email"])
//Object.freeze(Jsuser);
//changes will not be propogated
console.log(Jsuser);
Jsuser.greeting = function(){
    console.log("hello from dev agarwall");
}
Jsuser.greetingtwo= function(){
    console.log(`hello from ${this.name}`);
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())