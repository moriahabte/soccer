var app = new Vue({
    el: '#app',
    data: {
        message1: 'first page!',
        message2: 'second page!',
        games: [],
        input: [],
        allLocations : [],
        details: 0,
        path: 0

    },
    created() {
        fetch("https://api.myjson.com/bins/12p1gm")
            .then(response => response.json())
            .then(json => {
                this.games = json.games
                console.log("success!!!!", json);
                data = json;
                games = data.games;
                console.log(games);


            })
    },
    methods: {
        getContactPage: function (event) {
            this.path = 1
        },
         getHomePage: function (event) {
            this.path = 0
        },
         getChat: function (event) {
            this.path = 3;
        },
        getGamePage: function (event) {
            this.path = 2;
        },
         getLocation: function (event) {
        this.path = 4;
            
//    for (i = 0; i < games.length; i++) {
//        var location = games[i].location;
//        if (!this.allLocations.includes(location)) {
//            this.allLocations.push(location);
//
//            var createOption = document.createElement('a');
//            createOption.setAttribute('href', games[i].googlemap);
//            createOption.innerHTML = location;
//            var bo = document.getElementById(bo);
//            bo.appendChild(createOption);
//        }
//    }
//    console.log(allLocations)
    },
        search: function() {
            var searchvalue = document.getElementById("searchbar").value;
            var games = this.games;

            var term = searchvalue.toLowerCase();
            games.forEach(function (game) {
                var gameInHTML = document.querySelector("[data-title='" + game.teams + "']");
                console.log(gameInHTML);
                if (game.teams.toLowerCase().indexOf(term) != -1) {
                    gameInHTML.style.display = "block"

                } else {
                    gameInHTML.style.display = "none";
                }
            })

        }
                  
    }
    
   


})
