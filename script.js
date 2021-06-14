var slider = document.getElementById("rate");
var output = document.getElementById("rvalue");
output.innerHTML = slider.rvalue;

function updateRate() 
{
    var rvalue = document.getElementById("rate").value;
    document.getElementById("rvalue").innerText=rvalue;
}

slider.oninput = function(){
 output.innerHTML = this.rvalue;
    }

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    var result = document.getElementById("result").interest;
    if (principal==0 || principal<0)
    {
        alert("enter a positive number");
    }
    else
    {
    document.getElementById("result").innerHTML="If you deposit "+principal+
    "\<br\>at an interest rate of "+rate+
    "%\<br\>You will receive an amount of "+interest+"\<br\>in the year "+year+
    "\<br\>";
    }
}  


