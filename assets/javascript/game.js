var fightInProgress = false;

var game = {
    playerPokemon,
    defenderPokemon,

    pokemonList: [
        { name: "Pikachu", img: "assets/images/pikachu.png", hp: 100, ap: 7, ca: 10 },
        { name: "Bulbasaur", img: "assets/images/bulbasaur.png", hp: 120, ap: 6, ca: 15 },
        { name: "Squirtle", img: "assets/images/squirtle.png", hp: 150, ap: 5, ca: 20 },
        { name: "Charmander", img: "assets/images/charmander.png", hp: 180, ap: 4, ca: 25 }
    ],

    Initialize: function() {
        //Create character cards and display them on the screen
        for (var i = 0; i < this.pokemonList.length; i++) {
            var p = this.pokemonList[i];

            var div = 
            `<div id="${p.name}" class="card pokemon-item pokemon-select">
                <div class="card-img-top pokemon-img-container">
                    <div class="wrapper">
                        <img class="pokemon-img" src="${p.img}">
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <h6 class="hp-label">HP: ${String(p.hp)}</h6>
                </div>
            </div>`;

            $("#pokemonSelection").append(div);
        }
    },

    Attack: function() {

    },

    SetPlayerPokemon: function(id) {
        for (var i = 0; i < this.pokemonList.length; i++) {
            var p = this.pokemonList[i];

            if (p.name.toLowerCase() === id.toLowerCase()) {
                this.playerPokemon = p;
                console.log(this.playerPokemon);
            }
        }
    },

    SetDefenderPokemon: function(id) {
        for (var i = 0; i < this.pokemonList.length; i++) {
            var p = this.pokemonList[i];

            if (p.name.toLowerCase() === id.toLowerCase()) {
                this.defenderPokemon = p;
            }
        }
    }
};

$(document).ready(function() {
    $("#phase1").show();
    $("#phase2").hide();

    game.Initialize();

    $(".pokemon-item").click(function() {
        if ($(this).hasClass("pokemon-select")) {

            $(this).removeClass("pokemon-select").addClass("player").appendTo("#playerPokemon");
            $(".pokemon-item").not(this).removeClass("pokemon-select").addClass("enemy-select").appendTo("#enemySelection");

            game.SetPlayerPokemon($(this).attr("id"));

            $("#phase1").hide();
            $("#phase2").show();
        } else if (!fightInProgress && $(this).hasClass("enemy-select")) {
            
            $(this).removeClass("enemy-select").addClass("defender").appendTo("#defenderPokemon");

            $("#attack-btn").removeClass("disabled");

            game.SetDefenderPokemon($(this).attr("id"));

            fightInProgress = true;
        }
    });

    $("#attack-btn").click(function () {
        $("#attack-log").append(`<p class="log-item">${playerPokemon} attacked ${defenderPokemon} for ${rnd} dmg!</p>`);
    });
});