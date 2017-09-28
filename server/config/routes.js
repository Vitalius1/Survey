var user = require('../controllers/user_controller.js');
var survey = require('../controllers/survey_controller.js');

module.exports = function (app) {

    app.post('/login.json', (req, res) => {
        console.log("POST /login.json");
        user.loginUser(req, res);
    });

    app.post('/survey.json', (req, res) => {
        console.log("POST /survey.json");
        survey.createSurvey(req, res);
    });

    app.get('/survey.json', (req, res) => {
        console.log("GET /survey.json");
        survey.getAll(req, res);
    });

    app.get('/checkSession.json', user.checkSession);
        // console.log("GET /checkSession.json");

    app.get('/surveyone.json/:id', (req, res) => {
        console.log("GET /surveyone.json/id");
        survey.getOne(req, res);
    });

    app.delete('/survey.json/:id', (req, res) => {
        console.log("DELETE /survey.json/id");
        survey.deleteSurvey(req, res);
    });
    
    app.delete('/logout.json', (req, res) => {
        console.log("DELETE /logout.json");
        user.logout(req, res);
    });
    
    app.put('/surveyone.json/:id', (req, res) => {
        console.log("PUT /surveyone.json/id");
        survey.updateSurvey(req, res);
    });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};