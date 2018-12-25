

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

    $("#submit-button").on("click", function () {

        $("#buttons-div").html(" ");

        buttonArray.push($("#inputForm").val());

        makeButtons();

        $("#inputForm").val("")

    });


    $(".btn-danger").on("click", function () {

        var buttonName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Ik7JfpAz1pvVh6HxF0jhG0Lxyv80iodR&q=" + buttonName+ "&limit=10&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            var results = response.data;

            for (var i = 0; i > results.length; i++) {

                

            }

        });

    });

});