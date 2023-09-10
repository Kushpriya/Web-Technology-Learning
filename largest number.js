function large()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    a = parseInt(a);
    b = parseInt(b);
    b = parseInt(c);

    if (a>b && a>c)
    {
        document.getElementById("result").value=a;
        // document.write("Num1 is largest");


    }
    else if(b>c && b>a)
    {
    document.getElementById("result").value=b;
    // document.write("Num2 is largest");


    }
    else{
    document.getElementById("result").value=c;
    // document.write("Num3 is largest");

        
    }
}