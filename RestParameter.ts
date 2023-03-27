// Rest parameter or variable number of arguments  
//    ... is called as ecllipse

function Addition(...Arr : number[]) : number
{
    let sum : number = 0;
    var Cnt : number = 0;


    for(Cnt = 0; Cnt <Arr.length ; Cnt++)
    {
        sum = sum +Arr[Cnt];
    }
    return sum;

}

var Ret : number = 0;

Ret = Addition(10,20);
console.log("Result is :"+Ret);

Ret = Addition();
console.log("Result is :"+Ret);

Ret = Addition(10,20,30,40);
console.log("Result is :"+Ret);

Ret = Addition(10,20,30,40,50,60);
console.log("Result is :"+Ret);
