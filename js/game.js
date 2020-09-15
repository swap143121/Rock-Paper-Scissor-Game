var playerWin = 0;
var lossCount = 0;
var draws = 0;

function buttonEvent(e){
    
    document.getElementById('player').textContent = e.toUpperCase();
    let comp = computer();
    document.getElementById('computer').textContent = comp.toUpperCase();
    let result = calculate(e,comp);
    document.getElementById('result').textContent = result;
    if(result == 'You Won'){
        document.getElementById('result').style.color = "#00ff00";
        playerWin++;
        $('#wins').html('').append(playerWin);
    }
    else if(result == 'You Lost'){
        document.getElementById('result').style.color = "#ff6363";
        lossCount++;
        $('#losses').html('').append(lossCount);
    }
    else if(result == 'Draw'){
        draws++;
        document.getElementById('result').style.color = "black";
        $('#draws').html('').append(draws);
    }
    
}

function calculate(player,computer){
    if(player == computer){
        return 'Draw';
    }
    if(player == 'rock'){
        if(computer=='paper'){
            return 'You Lost';
        } else {
            return 'You Won';
        }
    }
    if(player == 'paper'){
        if(computer == 'rock'){
            return 'You Won';
        } else{
            return 'You Lost';
        }
    }
    if(player == 'scissor'){
        if(computer == 'rock'){
            return 'You Lost';
        } else{
            return 'You Won';
        }
    }
}

function computer(){
    let x = Math.floor(Math.random() * 101);
    if(x<33){
        return 'rock';
    }
    else if(x>33 && x<67){
        return 'paper';
    }
    else if(x>67){
        return 'scissor';
    }
}

function resetScore() {
    playerWin = 0;
    $('#wins').html(playerWin);
    draws = 0;
    $('#draws').html(draws);
    aiWin = 0;
    $('#losses').html(aiWin);
    result = '';
    $('#result').html(result);
}