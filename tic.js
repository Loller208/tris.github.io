
let boards='111111111';

function saveToLocalStorage() {
    const filename = 'data.txt';
    // Save the current state of boards to local storage
    localStorage.setItem(filename, boards);
	console.log(boards);
}

function myfunc() { 

	// Setting DOM to all boxes or input field 
	var b1 = document.getElementById("b1").value; 
    var b2 = document.getElementById("b2").value; 
    var b3 = document.getElementById("b3").value; 
    var b4 = document.getElementById("b4").value; 
    var b5 = document.getElementById("b5").value; 
    var b6 = document.getElementById("b6").value; 
    var b7 = document.getElementById("b7").value; 
    var b8 = document.getElementById("b8").value; 
    var b9 = document.getElementById("b9").value;
	
	//updateText
	// Create an array of the board values
    const board = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
    
    // Map each value to the corresponding number
    const textToWrite = board.map(value => {
        if (value == 'X' || value == 'x') {
            return '0';  // Map 'X' to 0
        } else if (value == ' ') {
            return '1';  // Map ' ' to 1
        } else if (value == '0') {
            return '2';  // Map '0' to 2
        }
        return '1';  // Default case, just in case there are unexpected values
    }).join('');

	boards = textToWrite;
	saveToLocalStorage();
	

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	// Checking if Player X won or not and after 
	// that disabled all the other fields 
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player X finish 
	// Checking for Player 0 starts, Is player 0 won or 
	// not and after that disabled all the other fields 
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player 0 finish 
	// Here, Checking about Tie 
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
			b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
			b8 == '0') && (b9 == 'X' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('print') 
				.innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Function to reset game 
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ' ';
	boards='111111111';
	saveToLocalStorage();
} 

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0 
flag = 1; 
function myfunc_3() { 
	if (flag == 1) { 
		document.getElementById("b1").value = "X"; 
		document.getElementById("b1").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b1").value = "0"; 
		document.getElementById("b1").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_4() { 
	if (flag == 1) { 
		document.getElementById("b2").value = "X"; 
		document.getElementById("b2").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b2").value = "0"; 
		document.getElementById("b2").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_5() { 
	if (flag == 1) { 
		document.getElementById("b3").value = "X"; 
		document.getElementById("b3").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b3").value = "0"; 
		document.getElementById("b3").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_6() { 
	if (flag == 1) { 
		document.getElementById("b4").value = "X"; 
		document.getElementById("b4").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b4").value = "0"; 
		document.getElementById("b4").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_7() { 
	if (flag == 1) { 
		document.getElementById("b5").value = "X"; 
		document.getElementById("b5").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b5").value = "0"; 
		document.getElementById("b5").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_8() { 
	if (flag == 1) { 
		document.getElementById("b6").value = "X"; 
		document.getElementById("b6").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b6").value = "0"; 
		document.getElementById("b6").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_9() { 
	if (flag == 1) { 
		document.getElementById("b7").value = "X"; 
		document.getElementById("b7").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b7").value = "0"; 
		document.getElementById("b7").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_10() { 
	if (flag == 1) { 
		document.getElementById("b8").value = "X"; 
		document.getElementById("b8").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b8").value = "0"; 
		document.getElementById("b8").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_11() { 
	if (flag == 1) { 
		document.getElementById("b9").value = "X"; 
		document.getElementById("b9").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b9").value = "0"; 
		document.getElementById("b9").disabled = true; 
		flag = 1; 
	} 
} 
