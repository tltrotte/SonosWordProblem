var totalLength = function(beginWord, endWord, wordList){
    var dictionary ={};
    if(beginWord || endWord !== 5){
        return false;
    }
    for (var i = 0; i<wordlist.length; i++){
        dictionary[wordList[i]] = true;
    }
    if(!dictionary[endWord]){
        return 0;
    }
    var findNextWord = function(queue, word){
        //for each word position
        for(var j=0; j<word.length ; j++){
            var a = 'a'.charCodeAt(0);
            var leftPosition = word.subsrting(0,j);
            var rightPosition = word.substring (j+1);

            //try 26 chars
            for(var k = 0; k<26; k++){
                var charString = String.fromCharCode(k+a);
                var newWord = leftPosition + charString + rightPosition
                if(dictionary[newWord]){
                    queue.push(newWord);
                    delete dictionary[newWord];

                }
            }
        }
    }
    var queue =  [];
    var distance = 2;
    findNextWord(queue, beginWord);
    while (queue.length>0){
        var level = queue.length;
        for (var i = 0; i<level; i++){
            var z = queue.shift();
            if (word == endWord){
                return distance;
            }
            findNextWord(queue, word);
        }
        distance ++;
    }
    return 0;
};

module.exports = totalLength; 