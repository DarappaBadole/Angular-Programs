
// function Addition(Arr : number []) : number
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
var MyData : number[] = [10,20,30,40];

// Ret = Addition(MyData);    not allowed

console.log("Result is :"+Ret);

Ret = Addition(10,20,30,40);


