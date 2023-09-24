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

//type inference
let dog='bau'
//dog=0 will give an error

//union type
let cat:string|number
//cat can be string or number

//Generics. 
//we have utility functions that we want to use with different types of variables. using any would not give us access to type checking

function utility(par:any[],val:any){
    let newAr=[val,...par]
    return newAr
}
//
let t=utility([3,4,5],8)
t[0].split('')//use split on a number but don't get error

 function newUtility<T>(arr:T[],val:T){
    let newAr=[val,...arr]
    return newAr
 }
 let t2=newUtility([4,5,6],9)
 t2[0].split('')//error. Generics allow us to use functions that are type safe and flexible


 //classes
 class Student{
  /*   stud_name:string  
    stud_age:number
    stud_courses:string[]

    constructor(name:string,age:number,courses:string[]){
        this.stud_name=name,
        this.stud_age=age,
        this.stud_courses=courses
    } */
    //what if i want private fields.
    stud_name:string  
    stud_age:number
    private stud_courses:string[]

    constructor(name:string,age:number,courses:string[]){
        this.stud_name=name,
        this.stud_age=age,
        this.stud_courses=courses
    }
    enroll(coursename:string){
        this.stud_courses.push(coursename)
    }
    listCourses(){
        return this.stud_courses.slice()
    }

 }

 let John=new Student('john',19,['math','spanish'])
 John.stud_courses//cannot access field
 John.listCourses()



class neoStudent{
//typescript cool feature, declare visibility directly in constructor

constructor(public name:string,public age:number,private courses:string[]){}

}

let Mark=new neoStudent('mark',66,['math'])
//interfaces, object type definition


interface Human{
    bodytype:string|number;
    age:number;
    
    assemble:()=>void
}
let Brazil:Human={bodytype:99,age:77, assemble(){console.log('juju')}}
//interface can be extended 
interface Baby extends Human{
    diaper:boolean
}
let jojnjr:Baby={diaper:true}//error, neeeds all props
// interface extra feature. interfaces can be implemented by classes

class Frankestein implements Human{

    bodytype: string | number;
    age: number;

    assemble () {console.log('hh');}
}