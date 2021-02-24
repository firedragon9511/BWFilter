
require('../lib/bw_filter.js').BWFilter

var whiteListArr = 
    ["you","so", "then", "can", "talk", "with", "has", "have", "had", "be", "your", "please", "hi", 
    "i", "hello", "friend", "help", "my", "thanks", "nothing", "all", "want", "make", "boy", "girl", 
    "woman", "man", "male", "magic", "made", "list", "did", "do", "fire", "star", "simnple", "use", "match",
    "ocurrence", "lemon", "apple", "beautiful", "hand", "hands", "foots", "foot", "animal", "dog"];

/**
 * @param {String} str - Filtering string
 */
var FilterWhiteList = (str, whiteList) => {
    var result = str;
    var extractWordsRegex = /(\w+){2,}/gi;
    var matchIsolatedCharSequenceRegex = /\b(\w(\s+))+.\b/gi // /\b(\w\s)+.\b/g;
    var matchMoreThanOneSpace = /(\s{2,})/gi;
    var nonListed = [];
 
    result = result.replace(matchMoreThanOneSpace, " ");

    var isolatedSequencesMatch = result.match(matchIsolatedCharSequenceRegex);

 
    //console.log("Joined spaces: " + result);


    if(isolatedSequencesMatch !=null){
        for(var n = 0; n < isolatedSequencesMatch.length; n++){
            var trimmed = isolatedSequencesMatch[n].replace(/\s/gi, "");
            if( whiteList.indexOf(trimmed) == -1)
               result = result.replace(isolatedSequencesMatch[n], trimmed);
        }
    }

    var matches = result.match(extractWordsRegex);

    for(var n = 0; n < matches.length; n++){
        if( whiteList.indexOf(matches[n]) == -1)
            nonListed.push(matches[n]);
    }

    
    
    for(var n = 0; n < nonListed.length; n++){
       // console.log(nonListed[n]);
        result = result.replace(new RegExp("\\b("+nonListed[n]+")\\b","ig"), "####");
    }

    return result;
    /*for(var n = 0; n < matches.length; n++){
        
    }*/

}

console.log(FilterWhiteList("i want be your friend please, so then i can talk with your dog", whiteListArr ));