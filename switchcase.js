function week()
{
    var dayofweek = document.getElementById("day").value;
    dayofweek = parseInt(dayofweek);

    switch(dayofweek)
    {
        case 1:
        document.getElementById("result").value="Sunday";

            break;
        case 2:
        document.getElementById("result").value="Monday";

            break;
        case 3:
        document.getElementById("result").value="Tuesday";

            break;

        case 4:
        document.getElementById("result").value="Wednesday";

            break;

        case 5:
        document.getElementById("result").value="Thursday";

            break;

        case 6:
        document.getElementById("result").value="Friday";

            break;
        case 7:
            document.getElementById("result").value="Saturday";
            break;
        default:
            document.getElementById("para").innerHTML="Invalid input!!..Please enter a number from 1 to 7.";


    }

}
