function solve(input){
    var text = input[0];
    var regex = /<p\>(.*?)<\/p\>/g;
    var checker;
    var output = "";

    var matches = regex.exec(text);
    var alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    while(matches != null)
    {
        var match = matches[1];
        var currEl;
        var word = '';
        
        for (var i = 0; i < match.length; i++) {
            currEl = match[i];
            var asciiCode = currEl.charCodeAt(0);

            if ((asciiCode >= 48 && asciiCode <= 57) || (asciiCode >= 97 && asciiCode <= 122)) {
                if (asciiCode >= 97 && asciiCode <= 122) {
                    checker = asciiCode - 96;
                    if (checker <= 13) {
                        checker += 13;
                    }else{
                        checker -= 13;
                    }

                    word += alphabet[checker];
                }else{
                    word += currEl;
                }

            }else{
                currEl = " ";
                word += currEl;
            }
        }

        for (var j = 0; j < word.length; j++) {
            currEl = word[j];
        }

        word = word.replace(/\s+/g, ' ');

        output += word;

        matches = regex.exec(text);
    }

    console.log(output);
}

//solve([
//   '<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>'
//]);

solve(
    ['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****12</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']
);