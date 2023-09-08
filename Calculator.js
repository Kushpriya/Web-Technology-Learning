function addition()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a = parseInt(a);
    b = parseInt(b);
    var sum = a+b;
    document.getElementById("result").value=sum;
    // document.getElementById("para").innerHTML=sum;

}
function subtraction()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a = parseInt(a);
    b = parseInt(b);
    var sub = a-b;
    document.getElementById("result").value=sub;
}
function multiplication()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a = parseInt(a);
    b = parseInt(b);
    var mul = a*b;
    document.getElementById("result").value=mul;
}
function division()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a = parseInt(a);
    b = parseInt(b);
    var div = a/b;
    document.getElementById("result").value=div;
}