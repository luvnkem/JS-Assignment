const counterBtn = (btn) => {
    let counter = parseFloat(counterTxt.textContent);

    // Increase and Decrease Counter

    if (btn ==="-"){
        counter -= 1;
    }
    else if (btn ==="+") {
        counter += 1;
    }
    else{
        counter = 0;
    }
    
    counterTxt.textContent = counter;

    // Change counter background
    if (counter < 0){
        counterTxt.style.backgroundColor = 'red';
    }
    else if (counter === 0){
        counterTxt.style.backgroundColor = 'black';
    }
    else{
        counterTxt.style.backgroundColor = 'green';
    }
    
} 

    