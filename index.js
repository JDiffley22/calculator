// display function - accepts the values clicked that i've set on the buttons and returns them to the textbox.

function display (val){
    document.getElementById('result').value +=val

    return val
};

/* solve function - variable x accepts user input the expression is then stored in variable y. 
solve method is called when user clicks on the equals"=" operator and dispalys in the textbox.*/

function solve(){
    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y
    return y
};

// clear screen function to reset screen value to nothing
function clearScreen(){
    document.getElementById('result').value = ""

};

// text input box selected upon page loading for ease of access
window.onload = function() {
    document.getElementById("result").focus()
};