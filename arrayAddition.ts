
var week : number[] = [10,20,30,40,50];

var sum : number = 0 ;
var cnt  : number =0;

for(cnt = 0; cnt < week.length; cnt++)
{
    sum = sum + week[cnt];
}

console.log("Addition of array is : "+sum);