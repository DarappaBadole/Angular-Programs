// write a application which performs addition and substraction of two numbers

//  ky karayacha aahe ?  :   Addition and substraction
//   te karayala aaplyala ky ky  pahije ?  : No1 and No2

// inside class we cant use let , var ,function or any keyword
// inside constructor , to initialize variable we have to use "this" keyword


class Arithmatic
{
    // Data or characteristics

    No1 : number;
    No2 : number;

    constructor(Value1 : number , Value2 : number)
    {
        this.No1 = Value1;
        this.No2 = Value2;
    }

    Addition() : number
    {
        return this.No1 + this.No2;
    }

    Substraction() : number
    {
        return this.No1 - this.No2;
    }

}

var obj1 = new Arithmatic(10,11);
var obj2 = new Arithmatic(20,21);

var Ret : number= 0;

Ret = obj1.Addition();
console.log("Addition is :"+Ret);
 
Ret = obj1.Substraction();
console.log("substraction is :"+Ret);