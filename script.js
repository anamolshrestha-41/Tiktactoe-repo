//Accessing part
let box= document.querySelectorAll(".box");
let resetButton = document.querySelector("#game-reset");
let turn = true;

//Winners need to Have These Patterns
const winStrategy=[
    [0, 1, 2],[0,3, 6],[0, 4, 8],[1, 4, 7],
    [2, 5, 8],[3, 4, 5],[6, 7, 8],[2, 4, 6]
];

//Adding Eventlistener for each buttons
box.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        if(turn){
            boxes.innerText="O";
            turn=false;
        }
        else{
            boxes.innerText="X";
            turn= true;
        }
        // boxes.disabled=true;
        boxes.style.pointerEvents = "none"; // Disable clicks
        checkWinner();
    });
});

//Function for checking winner
function checkWinner(){
    for(let strategy of winStrategy){
        let pos1 = box[strategy[0]].innerText;
        let pos2 = box[strategy[1]].innerText;
        let pos3 = box[strategy[2]].innerText;
        if(pos1==pos2 && pos2==pos3 && pos1!=""){
            setTimeout(()=>{
                alert(`Player ${pos1} wins!!`);
                resetGame();
            });
            return;
        }
    }
};

//function for reset game
function resetGame(){
    box.forEach((boxes)=>{
        boxes.innerText="";
        boxes.style.pointerEvents = "auto";
        });
        turn=true;
    };

//Event Listener for Game Changer... hahahaha
resetButton.addEventListener("click", resetGame);