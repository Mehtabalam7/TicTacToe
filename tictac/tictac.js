let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg p");
let newGame = document.querySelector("#new-btn");
let resGame = document.querySelector("#res-btn");
let audio = document.querySelector("#aud");
let btnAudio = document.querySelector("#btn-aud");
let btnAudio2 = document.querySelector("#btn-aud2");

let winnerPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turnO = true;

let Pattern;


let resetGam = () => {
    turnO = true;
    for (box of boxes) {
        box.innerHTML = "";
        box.disabled = false;
        msg.innerHTML = "";
    }
}

let bgcDisable = (pos1, pos2, pos3) => {
    pos1.style.backgroundColor = "#2892D7";
    pos2.style.backgroundColor = "#2892D7";
    pos3.style.backgroundColor = "#2892D7";
}


let audioPlay = () => {
    audio.play();
}
let winnerShow = (pos1, pos2, pos3, Winner) => {
    // pos1.style.backgroundColor = "#f0ffce51";
    // pos2.style.backgroundColor = "#f0ffce51";
    // pos3.style.backgroundColor = "#f0ffce51";
    msg.innerHTML = `The Winner is ${Winner}`;
    msg.classList.add("class", "msg-result")
    blockbtns()
}

let blockbtns = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner()
    })
})


let checkWinner = () => {
    for (Pattern of winnerPattern) {
        // console.log(boxes[Pattern[0]].innerHTML,boxes[Pattern[1]],boxes[Pattern[2]])//,Pattern[1],Pattern[2])

        let valpo1 = boxes[Pattern[0]].innerHTML;
        let valpo2 = boxes[Pattern[1]].innerHTML;
        let valpo3 = boxes[Pattern[2]].innerHTML;

        let pos1val = boxes[Pattern[0]];
        let pos2val = boxes[Pattern[1]];
        let pos3val = boxes[Pattern[2]];

        if (valpo1 != "" && valpo2 != "" && valpo3 != "") {
            if (valpo1 === valpo2 && valpo2 === valpo3) {
                console.log("Winner", valpo1)
                winnerShow(pos1val, pos2val, pos3val, valpo1)
                audioPlay()
            }
        }
    }
}

resGame.addEventListener("click", resetGam);
newGame.addEventListener("click", resetGam)