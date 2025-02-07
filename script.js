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
        boxes.disabled=true;
        checkWinner();
    });
});

//Function for checking winner
function checkWinner(){
    for(let strategy of winStrategy){
        let a = box[strategy[0]].innerText;
        let b = box[strategy[1]].innerText;
        let c = box[strategy[2]].innerText;
        if(a==b && b==c && a!=""){
            setTimeout(()=>{
                alert(`Player ${box[a].innerText} wins!!`);
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
        boxes.disabled=false;
        });
    };

//Event Listener for Game Changer... hahahaha
resetButton.addEventListener("click", resetGame);