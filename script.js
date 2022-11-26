const rate=document.getElementById("myrate");
var r=document.getElementById('myrate').value;
rate.addEventListener('input',()=>{
    // console.log(rate);
    r=document.getElementById('myrate').value;
    document.getElementById('rate_val').innerText=`${r} %`;
})
function compute(){
    var p=document.getElementById('principal').value;
    var t=document.getElementById('years').value;
    var future=new Date().getFullYear()+parseInt(t);
    var interest=(p*r*t)/100;
    var amount=parseInt(p)+interest;
    const mesg=document.getElementById('result');
    if(!(p<=0)){
        const text="If you deposit "+"<span class='mark'>"+p+"</span>"+", <br>at an interest rate of "+"<span class='mark'>"+r+"%"+"</span>"+".<br> You will receive an amount of "+"<span class='mark'>"+interest+"</span>"+",<br>in the year "+"<span class='mark'>"+future+"</span>"+"<br>";
        mesg.innerHTML=text;
    }
    else{
        alert("Enter a positive number");
        document.getElementById('principal').focus();
    }
    // console.log(p);
    // console.log(r);
    // console.log(t);
    // console.log(future);
    // console.log(interest);
}