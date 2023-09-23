let a:string
/* a=9  would be an error*/
a='nowitsright'
let b:string[]

let c:number

let person:{name:string,
age:number}
person={name:'john',age:0}

let persons:{names:string}[]

let courses:string|number

type Person={
    name:string,
    age:number
}

let newperson:Person
let  newpersons:Person[]

function add(x:number,y:number):number{
    return x+y
}

interface G {string}
let er=Array<string>
