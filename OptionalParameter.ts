
// 3 rd type of parameters of functional :-> optional parameter in ts
 
function AreaOfCircle(Rad : number , PI ? : number) : number
{
    let Ans : number = 0;

    if(PI == undefined)
    {
        PI = 3.14;
    }

    Ans = PI * Rad * Rad;

    return Ans;
}

var Ret : number = 0;

Ret = AreaOfCircle(20.3 , 3.14);
console.log("Area of circle is :"+Ret);

Ret = AreaOfCircle(20.3);
console.log("Area of circle is :"+Ret);