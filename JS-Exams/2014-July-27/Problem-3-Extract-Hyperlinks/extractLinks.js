function solve(input){
    var html = input.join('\n');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var match;
    while (match = regex.exec(html)) {
        match = match.filter(Boolean);
        if (match[2].substring(0, 1) == '\'' || match[2].substring(0, 1) == '\"') {
            var hrefValue = match[3];
        }else{
            var hrefValue = match[2];
        }
        console.log(hrefValue);
    }
}