const tinderuser=new Object()
// const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="aish"
tinderuser.islogin=false
console.log(tinderuser); //{ id: '123abc', name: 'aish', islogin: false }

const regularuder={
    email:"aish@gg.com",
    fullname:{
        userfullname:{
            firstname:"aishwarya",
            lastname:"maheshwari"
        }
    }
}
console.log(regularuder.fullname.userfullname.firstname); //aishwarya
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3=Object.assign(obj1,obj2)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users1=[
    {
        id:"aish@gg",
        user:"bb"
    },
    {
        id:"aish@gg",
        user:"bb"
    },
    {
        id:"aish@gg",
        user:"bb"
    }
]
users1[1].id
console.log(tinderuser);
console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'islogin' ]
console.log(Object.values(tinderuser)); //[ '123abc', 'aish', false ]
console.log(Object.entries(tinderuser)); //[ [ 'id', '123abc' ], [ 'name', 'aish' ], [ 'islogin', false ] ]

console.log(tinderuser.hasOwnProperty('isloging')); //false









