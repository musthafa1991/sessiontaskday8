
// Write a “person” class to hold all the details.
console.log("“person” class to hold all the details")
class Person{
  constructor(name,age,dob,place,education,profession,marrital_status,hight,weight){
    this.name=name;
    this.age=age;
    this.dob=dob;
    this.place=place;
    this.education=education;
    this.profession=profession;
    this.marrital_status=marrital_status;
    this.hight=hight;
    this.weight=weight;
  }
}

const musthafa= new Person("mohamed musthafa",30,10-05-1991,"Perambalur","BE-Mech","Becoming a Fullstack developer","unmarried",5.3,65); 

console.log(musthafa);



/*
write class for movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

*/

console.log("class for Movie")

class Movie{
  constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getpg(marray){

    let Result=[];
    marray.filter((movie)=>{
      if(movie.rating=="PG13"){
        Result.push(movie)
      }
    })
    return Result



  }

}

const pokkiri = new Movie("Pokkiri","sun picture","PG13");
const ratchagan=new Movie("Ratchagan","avm production","PG");
const don=new Movie("Don","srm production","PG");
const casino=new Movie("Casino Royal","Eon Production","PG13");
const padaiyappa= new Movie("Padaiyappa","AVM","PG13");
let moviearr=[pokkiri,ratchagan,don,casino,padaiyappa];

console.log(pokkiri.getpg(moviearr));

console.log("Class for find the uber price");

class Uber{
  constructor(baseprice,distancepay,carmodel){
    this.baseprice=baseprice;
    this.distancepay=distancepay;
    this.carmodel=carmodel;
  
  }
  getprice(distance){
    if(distance<=3||distance==undefined){
      return this.baseprice;
    }
    else{
      return this.distancepay*distance
    }
    
  }
}

const uberprice=new Uber(40,10,"innova");
console.log(uberprice.getprice()); 


class Circle{
  constructor(radius=1,color="Red"){
    this.radius=radius;
    this.color=color;
  }
  getradius(){
    return `The circle radius is ${this.radius}`;
  }
  setradius(radius){
    return `The circle radius is ${this.radius=radius}`;
  }
  getcolor(){
    return `The circle radius is ${this.color}`;
  }
  setcolor(color){
    return `The circle radius is ${this.radius=color}`;
  }
  getarea(){
    return `The circle area is ${3.14*this.radius*this.radius}`;
  
  }
  getcircumstance(){
    return `The circle circumstance is ${2*3.14*this.radius}`;
  }

}

const circle1=new Circle()

console.log(circle1)
console.log(circle1.getradius())
console.log(circle1.getcolor())
console.log(circle1.getarea())
console.log(circle1.getcircumstance())
console.log(circle1.setradius(3))
console.log(circle1.setcolor("blue"))

