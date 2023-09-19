function player1()
{
    var a = Math.random()*1000;
    a = parseInt(a);
    document.getElementById("field1").value = a;
    display();

}

function player2()
{
    var b = Math.random()*1000;
    b = parseInt(b);
    document.getElementById("field2").value = b;
    display();
}
function display()
{
    var a = document.getElementById("field1").value;
    var b = document.getElementById("field2").value;

    if (a!="" && b!= "")
    {

        if(a>b)
        {
            document.getElementById("result").innerHTML ="Player 1 is the winner";

        }
        else if(b>a)
        {
            document.getElementById("result").innerHTML ="Player 2 is the winner";

        }
        else
        {
            document.getElementById("result").innerHTML ="Invalid";

        }
    }

}