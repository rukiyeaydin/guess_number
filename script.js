var sayi = Math.floor(Math.random()*100) + 1;
var guess_num= 0;
var array_guessed_num= [];

function game()
{
    if(document.getElementById("number").value == sayi)
    {
        document.getElementById("correct").innerHTML = "Your guess is correct";
        document.getElementById("notcorrect").innerHTML = "";
        document.getElementById("count").innerHTML= "You guessed in "+guess_num+" guesses";
        // document.getElementById("past").innerHTML= "Guessed numbers are: "+array_guessed_num;
    }
    else
    {
        array_guessed_num.push(document.getElementById("number").value);
        guess_num += 1;

        if(document.getElementById("number").value < sayi)
        { 
            document.getElementById("notcorrect").innerHTML= "Your guess is low";
            document.getElementById("count").innerHTML= "Number of guesses: "+guess_num;
            document.getElementById("past").innerHTML= "Guessed numbers are: "+array_guessed_num;
        }
        else if(document.getElementById("number").value > sayi)
        {
            document.getElementById("notcorrect").innerHTML= "Your guess is high";
            document.getElementById("count").innerHTML= "Number of guesses: "+guess_num;
            document.getElementById("past").innerHTML= "Guessed numbers are: "+array_guessed_num;
        }
    }
}