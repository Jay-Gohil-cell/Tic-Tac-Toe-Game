let boxes = document.querySelectorAll(".box");
let turnX = true ;

let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerHTML !== "") return;

        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        findWinner();
    });
});

function findWinner() {
    for(let pattern of winnerPattern)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !== "" && val2 === val3 && val3 === val1){
            document.querySelector(".winner").innerText = `Winner is : ${val1}`;
            disableAllBoxes();
            
        }
    }
}

document.querySelector(".btn-reset").addEventListener("click", ()=> {
    resetGame();
});

function resetGame() {
    for(let all of boxes){
        all.innerText = "";
        document.querySelector(".winner").innerText = "Best of Luck !";
        turnX = true;
        enableAllBoxes();
    }
}

function disableAllBoxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}

function enableAllBoxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "auto";
    });
}

