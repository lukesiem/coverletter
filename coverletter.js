function countletters(string) {
    var numberOfOccurence = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (numberOfOccurence[character]) {

           numberOfOccurence[character]++;
        } else {
           numberOfOccurence[character] = 1;
        }
    }

    return numberOfOccurence;
};

console.log(countletters("how are you"));