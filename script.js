let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const gencomputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    msg.innerText = "Game Was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin , userchoice , compchoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        const choiceid = choice.getAttribute("id")
        playgame(choiceid);
    });
});