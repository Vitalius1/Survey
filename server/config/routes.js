var game = require('../controllers/game_controller.js');
var question = require('../controllers/question_controller.js');

module.exports = function (app) {

    // app.post('/game.json', (req, res) => {
    //     console.log("POST /game.json");
    //     game.createGame(req, res);
    // });

    // app.get('/game.json', (req, res) => {
    //     console.log("GET /game.json");
    //     game.allGames(req, res);
    // });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};