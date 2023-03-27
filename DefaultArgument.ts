
// percentage calculation logic using typescript


function Percentage(Marks : number = 400 , Outof : number = 500) : number 
{
    let Ans : number = 0;
    Ans = (Marks / Outof) * 100;

    return Ans;
}


var per : number = 0;

per = Percentage(220,300);
console.log("Percentage is :"+per);

per = Percentage(220);
console.log("Percentage is :"+per);

per = Percentage();
console.log("Percentage is :"+per);