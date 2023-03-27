//  class  = Data + Functions
//  class  = Characteristics + Behaviours

class Student
{ 
    // chatacteristics

    Name : string;   
    Marks : number;
    Age : number;
    City : string;
    
    //  Behaviours
    constructor(N : string , M : number , A : number , C : string)
    {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }

    Display() : void
    {
        console.log("Name of student :"+this.Name);
        console.log("Marks of student :"+this.Marks);
        console.log("Age of student :"+this.Age);
        console.log("city of student :"+this.City);
    }

}

var obj40 = new Student("Darry",100,21,"Dharashiv"); 
var obj39 = new Student("Nihal",99,13,"Ghodegaon"); 

obj40.Display();
obj39.Display();