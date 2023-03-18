
function Addition(Arr : number[]) : number
{
        var sum : number = 0 ;
        var cnt  : number =0;

        for(cnt = 0; cnt < week.length; cnt++)
        {
            sum = sum + week[cnt];
        }

        return sum;
}


var week : number[] = [10,20,30,40,50];

var Ret : number =0;

Ret = Addition(week);
console.log("Addition of array is : "+Ret);