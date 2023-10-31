// Your code here
const dodger = document.getElementById('dodger');
dodger.style.background = '#FF69B4';
dodger.style.bottom = "0px";
dodger.style.left = "0px";

const maxWidth = document.getElementById("game").offsetWidth - (dodger.offsetWidth);

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
    console.log("left: ", left, " / ", dodger.style.left);
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < maxWidth) {
        dodger.style.left = `${right + 1}px`;
    }
    console.log("right: ", right, " / ", dodger.style.left);
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key === "ArrowLeft") {
        moveDodgerLeft();
    } 
    if (key === "ArrowRight") {
        moveDodgerRight();
    }
})