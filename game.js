//generate random choice from array for computer choice
var myArray = ["✊", "🖐", "✌️"];

var computer_ch = '';
var user_ch = '';

var comp_score = 0
var user_score = 0



// check for wining, this function call every time button clicked
// not declare the winner but increase scores according to condition
function check_for_win(computer_ch, user_ch) {
    // console.log(computer_ch, user_ch);
    if (user_ch == computer_ch) {
        // nothing 
        //set message 
        document.getElementById("message").classList.remove("text-success");
        document.getElementById("message").classList.remove("text-danger");
        document.getElementById("message").innerHTML = "Tie";
    }

    // guys we are comparing emojis XD

    else if (user_ch == "✊") {
        if (computer_ch == "🖐") {
            //set message 
            document.getElementById('audioEffect1').play();
            document.getElementById("message").innerHTML = "👉 You lose! Paper covers Rock";

            // add class accoding to message, here red becuase you lose
            // before that remove current class
            document.getElementById("message").classList.remove("text-success");
            document.getElementById("message").classList.add("text-danger");

            //computer wins, so increment computer's score
            document.getElementById("computer-score").innerHTML= ++comp_score;


        }
        else {
            //set message 
            document.getElementById('audioEffect2').play();
            document.getElementById("message").innerHTML = "👉 You win! Rock smashes Scissors";

            // add class accoding to message, here red becuase you win
            // before that remove current class
            document.getElementById("message").classList.remove("text-danger");
            document.getElementById("message").classList.add("text-succes");

            //player wins, so increment player's score
            document.getElementById("player-score").innerHTML= ++user_score;
        }
    }

    else if (user_ch == "🖐") {
        if (computer_ch == "✌️") {
            //set message 
            document.getElementById('audioEffect1').play();
            document.getElementById("message").innerHTML = "👉 You lose! Scissor cut Paper";

            // add class accoding to message, here red becuase you lose
            // before that remove current class
            document.getElementById("message").classList.remove("text-success");
            document.getElementById("message").classList.add("text-danger");

            //computer wins, so increment computer's score
            document.getElementById("computer-score").innerHTML= ++comp_score;


        }
        else {
            //set message 
            document.getElementById('audioEffect2').play();
            document.getElementById("message").innerHTML = "👉 You win! Paper covers Rock";

            // add class accoding to message, here red becuase you win
            // before that remove current class
            document.getElementById("message").classList.remove("text-danger");
            document.getElementById("message").classList.add("text-success");

            //player wins, so increment player's score
            document.getElementById("player-score").innerHTML= ++user_score;
        }
    }

    else if (user_ch == "✌️") {
        if (computer_ch == "✊") {
            //set message 
            document.getElementById('audioEffect1').play();
            document.getElementById("message").innerHTML  = "👉 You lose! Rock smashes Scissors";

            // add class accoding to message, here red becuase you lose
            // before that remove current class
            document.getElementById("message").classList.remove("text-success");
            document.getElementById("message").classList.add("text-danger");

            //computer wins, so increment computer's score
            document.getElementById("computer-score").innerHTML= ++comp_score;


        }
        else {
            //set message 
            document.getElementById('audioEffect2').play();
            document.getElementById("message").innerHTML = "👉 You win! Scissor cut Paper";

            // add class accoding to message, here red becuase you win
            // before that remove current class
            document.getElementById("message").classList.remove("text-danger");
            document.getElementById("message").classList.add("text-success");

            //player wins, so increment player's score
            document.getElementById("player-score").innerHTML= ++user_score;
        }
    }
    else {
        document.getElementById("message").innerHTML = ":(";
    }

}