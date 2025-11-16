// var myName= "Adarsha";
// let myPhone = 451660979;
// const isFree= true;

// typeof(myName,myPhone,isFree);
// console.log(myName,myPhone,isFree);

// isDone=false;
// const givenName="";
// typeof (isDone, givenName);

// let student={
//     name:"adarsha",
//     phone: 451660979,
//     skills:["js","html","css"]
// }
// console.log(student.skills)
// student.name="harish";
// console.log(student);

// // ternary operater 
// // check x is greater than 5 or not 
// let x= 4;
// let y=10;
// const addValue=console.log(x+y);
// const subValue=console.log(x-y);
// console.log(Math.pow(x,y));
// x>5 ? console.log("is greater than five") : console.log("is samller number");

// let a=5;
// let b= 5;
// if (a>b) {
//     console.log("a is gerater");
// }
// else if (a<b){
//     console.log(" b is greater");
// } else {
//     console.log("they are equal");
//  };

//  try {
//   isName  = "Adarsha "
//  isName ="binod"
//  } catch(error){
//     console.log(error);
//  }finally {
//     console.log("error catched successfull");
//  };

//  let j= "monday";
  
// switch(j){
//  case j="monday":
//     console.log("its monday ")
//     break;
//     case j="friday":
//         console.log("its friday ")
//         break;
//     default: console.log("its other days in week ")
// }
//  let fruitary=["mango","orange","banana","apple","pear","rench"]
//  console.log(fruitary.push("grape"));
//  console.log(fruitary.pop("apple"));
//  console.log(fruitary.splice(1,0,"pineapple"));
//  console.log(fruitary);
 
//  for (m=2;m<=10;m++){
//     if (m % 2!=0){
//         continue;
//     }
//     console.log(m)
//  };

//  let newArray= fruitary.map((item)=>"SKU"+item)
//  console.log(newArray);

//  let filArray= fruitary.filter((items)=>(items.includes("a")));
//  console.log(filArray);

//  let theArray=[];
//  let uniquenumber=[];
//  for(i=1;uniquenumber.length<=50;i++){
//    ranNum=Math.floor(Math.random()*100);
//    if (!uniquenumber.includes(ranNum)){uniquenumber.push(ranNum);}
   
//  }
//  console.log(uniquenumber);

//  // object 

//  const person = {
//   name: "prem",
//   age: 30,
//   skills: ["js", "html", "css"],
//   lifeEvents: {
//     birth: 1993,
//     graduation: 2015,
//     subjects: ["math", "science"],
//   },
//   bankBalance: null,
//   acounts: undefined,
//     fullName: () => {
//       return person.name + " " + person.age;
//     },
//     fullName: function () {
//       return this.name + " " + this.age;
//     },
// };
//  // deep copy 
//  const personstr= JSON.stringify(person);
//  const newPerson=JSON.parse(personstr);
//  console.log(newPerson);
//  // to add Ai on subject
//  console.log( person.lifeEvents.sibjects.splice[0,"AI"]);

// //destructuring of object ,doesnot modify object
//  const {name,locat,age}=person;

// //triple dot before and after equalstoo
// //  let just print except lifeevent
// const {lifeEvents,...rest}= restwithoutLifeEvent;
// console.log(restwithoutLifeEvent);

// //merge the object 
// const obj1={a:1,b:2};
// const obj2={b:3,c:4};
// const mergObj={...obj1,...obj2};
// console.log(mergObj);

//dates is string ,new date is object
const today= new Date("1994-06-15");
const dt =today.toLocaleDateString();
const val=new Date(today.getDay()+6);
console.log(val);
console.log(dt);




let food1= {
    name:"apple",
    expiredate:"12-07-2025",
    usedby:"12-07-2025"
};
let food2={
    name:"banana",
    expiredate:"12-12-2025",
    usedby:"11-12-2025"
};
const quality = (food1, food2) => {
  const food = food1 || food2;

  if (!food || !food.expiredate) {
    console.log("No food or expire date provided");
    return;
  }

  const expireDate = new Date(food.expiredate);
  const today = new Date();

  if (expireDate < today) {
    const diffTime = today - expireDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert ms → days
    console.log("The food has expired.");
    console.log(`The food expired ${diffDays} days ago.`);
  } else {
    console.log("The food is still good.");
  }
};

// sort string and number array 

// for string simply use sort 
let food =["banana","apple","peach"]
console.log (food.sort()); //done

//for number use high order function
let numbers=[40,200,1,2,3,100]
let sortedNumbers=numbers.sort((a,b)=>b-a);
console.log(sortedNumbers);

//for objects use one property 
let cars = [
    { make: "Toyota", year: 2005 },
    { make: "Honda", year: 2010 },
    { make: "Ford", year: 1995 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);

  

   