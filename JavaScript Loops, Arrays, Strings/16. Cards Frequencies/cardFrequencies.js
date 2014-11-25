function findCardFrequency(str){
    var cards = str.substring(0, str.length - 1).split(/[^0-9A-Z]+/i);
    var result = [];
    var count = 1;
    var isBusy = true;

    for (var i = 0; i < cards.length; i++) {
        count = 1;
        var currentCardFace = cards[i];

        for (var j = i + 1; j < cards.length; j++) {
            var nextCardFace = cards[j];

            if (currentCardFace == nextCardFace){
                count++;
                cards.splice(j, 1);
                j--;
            }
        }
        result.push({name: currentCardFace, value:count});

    }

    for (var i = 0; i < result.length; i++) {
        console.log(result[i].name + "->" + ((result[i].value * 100) / str.split(" ").length + "%"));
    }

}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
//findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');