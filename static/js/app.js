
//*LOGIC

var score = 0;
var playerChoice;

var readable  = {
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
};

var cpuChoice ={
    init: function(){
        this.store = Math.floor(Math.random() * 3);
        this.text = readable[this.store];
    },
    store: '',
    text: '',
}; 

cpuChoice.init();
console.log('cpuChoice:', cpuChoice.store, cpuChoice.text)

var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu) {
    if (order[player] === order[cpu]){
        console.log(order[player]);
        console.log(order[cpu]);
        return "\n" + " The game is tied. Try again?";
    }
    if (order[player] === order[cpu + 1]){
        score ++;
        return "\n" + " You won!" ;
    } else {
        score --;
        return  "\n" + ' You lost :(';
    }
}



//*UI

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos) {
    tag.addEventListener('click', function() {
        playerChoice = pos;
        cpuChoice.init();
        paragraph.innerText = '\n' + 'The computer chose: '  + cpuChoice.text;
        paragraph.innerText += chooseWinner(playerChoice, cpuChoice.store);
        paragraph.innerText += '\n' + 'Score: ' + score;
    })
    
}

var images = {
    tags: document.getElementsByTagName('img'),
    init : function() {
        for(var step = 0; step < this.tags.length; step ++) {
            assignClick(this.tags[step], step);
        }
    }
}

images.init()