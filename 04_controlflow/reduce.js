const mynum=[1,2,3,4,5,6,7,8,9,10]
// const total=mynum.reduce(function (acc,curv){
//     console.log(`acc:${acc} && ${curv}`)
//     return acc+curv
// },0)
const total=mynum.reduce((acc,currv)=>acc+currv,0)
console.log(total)
const shopping=[
    {
        item:"js",
        price: 199
    },
    {
        item:"j1s",
        price: 111
    },
    {
        item:"j2s",
        price: 333
    }
]
const price=shopping.reduce((acc,cur)=>acc + cur.price,0)
console.log(price)