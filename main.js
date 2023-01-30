// ic-05

let numClicks = 0;

function buttonClicked() {

	numClicks ++;

	

	newText = "Number of Times Button Clicked:".concat(numClicks);

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;

}