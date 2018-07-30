var selectedPokemon;

$(document).ready(function () {
    $(".pokemon-item").click(function () {
        $(".pokemon-item").removeClass("selected").addClass("unselected");
        $(this).removeClass("unselected").addClass("selected");

        $("#start-button").removeClass("disabled");

        selectedPokemon = $(this).attr("id");
        console.log("selected: " + selectedPokemon);
    });

    $("#start-button").click(function () {
        
    });
});