var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a;
/* a=9  would be an error*/
a = 'nowitsright';
var b;
var c;
var person;
person = { name: 'john', age: 0 };
var persons;
var courses;
var newperson;
var newpersons;
function add(x, y) {
    return x + y;
}
//type inference
var dog = 'bau';
//dog=0 will give an error
//union type
var cat;
//cat can be string or number
//Generics. 
//we have utility functions that we want to use with different types of variables. using any would not give us access to type checking
function utility(par, val) {
    var newAr = __spreadArray([val], par, true);
    return newAr;
}
//
var t = utility([3, 4, 5], 8);
t[0].split(''); //use split on a number but don't get error
function newUtility(arr, val) {
    var newAr = __spreadArray([val], arr, true);
    return newAr;
}
var t2 = newUtility([4, 5, 6], 9);
t2[0].split(''); //error. Generics allow us to use functions that are type safe and flexible
//classes
var Student = /** @class */ (function () {
    function Student(name, age, courses) {
        this.stud_name = name,
            this.stud_age = age,
            this.stud_courses = courses;
    }
    Student.prototype.enroll = function (coursename) {
        this.stud_courses.push(coursename);
    };
    Student.prototype.listCourses = function () {
        return this.stud_courses.slice();
    };
    return Student;
}());
var John = new Student('john', 19, ['math', 'spanish']);
John.stud_courses; //cannot access field
John.listCourses();
var neoStudent = /** @class */ (function () {
    //typescript cool feature, declare visibility directly in constructor
    function neoStudent(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    return neoStudent;
}());
var Mark = new neoStudent('mark', 66, ['math']);
var Brazil = { bodytype: 99, age: 77, assemble: function () { console.log('juju'); } };
var jojnjr = { diaper: true }; //error, neeeds all props
// interface extra feature. interfaces can be implemented by classes
var Frankestein = /** @class */ (function () {
    function Frankestein() {
    }
    Frankestein.prototype.assemble = function () { console.log('hh'); };
    return Frankestein;
}());
