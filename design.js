var bulb = 0

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("new").src="./images (2).jpg";
        bulb=1;
    }
    else{
        document.getElementById("new").src="images (3).jpg";
        bulb=0;
    }
}