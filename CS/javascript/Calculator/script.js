const screen = document.getElementById('display');
    

function AddTogether(input){
    screen.value += input; 
}

function CulcuOperator( ){
    try{ 
        screen.value = eval(screen.value);
    }
    catch{
        screen.value = "Error";
    }
}

function PosNeg(input){

    screen.value = parseFloat(screen.value) * -1;
}

function clearDisplay(){
    screen.value = ' '
}
