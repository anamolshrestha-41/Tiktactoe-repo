let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#game-reset");
let turn=true;

//Winning Patterns in TikTacToe
const winStrategy=[
    [0, 1, 2],[0,3, 6],[0, 4, 8],[1, 4, 7],
    [2, 5, 8],[3, 4, 5],[6, 7, 8],[2, 4, 6]
];

//sounds accessing
const click = new Audio("/sound/click.mp3");
const winSound = new Audio("/sound/Win.mp3");
const bgSound = new Audio("/sound/backGround.mp3");

bgSound.loop=true;
bgSound.volume=0.01;

window.addEventListener("load", ()=>{
    bgSound.play();
} );

//Adding Event Listeners for each buttons to access and sound.
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        click.currentTime = 0;
            click.play();
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn= true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//Function To Check Winner
 function checkWinner(){
    for(let Strategy of winStrategy){
        let pos1= boxes[Strategy[0]].innerText;
        let pos2= boxes[Strategy[1]].innerText;
        let pos3= boxes[Strategy[2]].innerText;
        if (pos1 === pos2 && pos2 === pos3 && pos1 !== "") {
            setTimeout(() => { //setTimeout is a built-in JavaScript function that
            //  delays the execution of a function for a specified time (in milliseconds).
            winSound.play(); 
            alert(`Player ${pos1} wins!`);
                resetGame(); // Auto-restart after showing alert
            });
            return;
        }


        //Practice Code!!....
        // let [a, b, c]= winStrategy[i];
        // if(boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c]){
        //     alert(`Player ${boxes[a].innerText} wins!`);
        //     resetGame();
        // }
    }
 };

 //Function To Reset The Game
 function resetGame() {
    setTimeout(() => {
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        turn = true;
 }); 
}
//Adding eventListner to the reset button
 reset.addEventListener("click", resetGame);
