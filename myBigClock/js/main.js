let wordClock;
$(document).ready(function(){
    
    const letters = $(".letter");
    let letter;
    for(letter of letters) {
        Utility.disableSelection(letter);
    }

    WordClock.start();
});
