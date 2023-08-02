function roll() {
    const colorArray = ["red", "blue", "yellow", "green", "pink", "white"];
    const betOnColors  = [];
    const rolled = [];
    var totalBet = 0;

    for (let i = 0; i < colorArray.length; i++) {
        // get all the 
        betOnColors.push(document.getElementById(colorArray[i]).value);
        // randomize 6 color but only 3 will be used
        rolled.push(colorArray[Math.floor(Math.random() * 6)])
        // will add all the bets per color
        totalBet += parseFloat(betOnColors[i])
        }

    document.dice.diceOne.value = document.dice.diceOne.style.background = document.dice.diceOne.style.color = rolled[0]
    document.dice.diceTwo.value = document.dice.diceTwo.style.background = document.dice.diceTwo.style.color = rolled[1]
    document.dice.diceThree.value = document.dice.diceThree.style.background =  document.dice.diceThree.style.color = rolled[2]

    document.getElementById('moneyy').value = parseFloat(document.getElementById('moneyy').value) - parseFloat(totalBet)

    for (let i = 0; i < 6; i++) {
        if (betOnColors[i] != 0 && rolled.includes(colorArray[i])) {
            n = 0
            for (let j = 0; j < 3; j++){
                if (colorArray[i] == rolled[j]) {
                    n += 2
                    }
                }
            // log win
            console.log(parseFloat(betOnColors[i])*n)
            document.getElementById('moneyy').value = parseFloat(document.getElementById('moneyy').value) + (parseFloat(betOnColors[i])*n)
            }
        }
}

function rst() {
    const colorArray = ["red", "blue", "yellow", "green", "pink", "white"];
    for (let i = 0; i < colorArray.length; i++) {
        document.getElementById(colorArray[i]).value = 0;
        }
}



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("number", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("number");
  ev.target.appendChild(document.getElementById(data));
}
