

var buttonArray = [
    "link & zelda",
    "pokémon",
    "mario",
    "the last of us",
    "metroid",
    "donkey kong",
    "metal gear solid",
    "assassin's creed",
    "red dead redemption",
    "the elder scrolls"
]

$(document).ready(function () {

    // Function to make buttons dynamically
    function makeButtons () {

        for (var i = 0; i < buttonArray.length; i++) {

            var makeButton = $("<button>");

            makeButton.addClass("btn btn-danger");
            makeButton.attr("data-name", buttonArray[i]);
            makeButton.attr("type", "button");
            makeButton.text(buttonArray[i]);
            
            $("#buttons-div").append(makeButton);
        }
    };

    makeButtons();

});