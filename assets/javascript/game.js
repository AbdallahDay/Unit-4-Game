var phase1complete = false;
var fightInProgress = false;
var playerPokemon;
var defenderPokemon;

$(document).ready(function () {
    $("#phase1").show();
    $("#phase2").hide();

    $(".pokemon-item").click(function () {
        if (!phase1complete && $(this).hasClass("pokemon-select")) {

            $(this).removeClass("pokemon-select").addClass("player").appendTo("#playerPokemon");
            $(".pokemon-item").not(this).removeClass("pokemon-select").addClass("enemy-select").appendTo("#enemySelection");

            playerPokemon = $(this).attr("id");
            phase1complete = true;

            $("#phase1").hide();
            $("#phase2").show();
        }

        if (!fightInProgress && $(this).hasClass("enemy-select")) {
            
            $(this).removeClass("enemy-select").addClass("defender").appendTo("#defenderPokemon");

            $("#attack-btn").removeClass("disabled");

            defenderPokemon = $(this).attr("id");
            fightInProgress = true;

        }
    });

    $("#attack-btn").click(function () {
        //PLACEHOLDER
        var rnd = Math.floor(Math.random() * 100) + 1;
        $("#attack-log").append(`<p class="log-item">${playerPokemon} attacked ${defenderPokemon} for ${rnd} dmg!</p>`);
    });
});