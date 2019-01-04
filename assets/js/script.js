

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

var animated = false;

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

    // Add user submission into array and recreate dynamic buttons from array
    $("#submit-button").on("click", function () {

        $("#buttons-div").html(" ");

        buttonArray.push($("#inputForm").val());

        makeButtons();

        $("#inputForm").val("");

    });

    // Run API request and dynamically add gifs (response) onto page, clearing previous gifs
    $(document).on("click", ".btn-danger", function () {

        var buttonName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Ik7JfpAz1pvVh6HxF0jhG0Lxyv80iodR&q=" + buttonName+ "&limit=10&lang=en"

        $("#gif-div").html("");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            var results = response.data;

            console.log(results);

            // Create gif with rating for each item in response array
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>");
                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating.toUpperCase());

                var gif = $("<img>");
                gif.attr("src", results[i].images.fixed_height_still.url);
                gif.attr("data-number", i);

                gifDiv.prepend(p);
                gifDiv.append(gif);

                console.log(gifDiv);

                $("#gif-div").prepend(gifDiv);

            };

            $("img").click(function () {

                var a = $(this).attr("data-number");

                if (animated === false) {
                    $(this).attr("src", results[a].images.fixed_height.url);
                    animated = true;
                }

                else if (animated === true) {
                    $(this).attr("src", results[a].images.fixed_height_still.url);
                    animated = false;
                }

            });

        });

    });

});