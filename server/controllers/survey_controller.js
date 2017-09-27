var mongoose = require('mongoose');
var Survey = mongoose.model("Survey");

module.exports = {
    createSurvey: function (req, res) {
        Survey.create(req.body, (err, question) => {
            if (err) {
                console.log("creation ERROR", err);
                res.json(err);
            } else {
                console.log("question CREATED");
                Survey.find({}, function (err, results) {
                    if (err) {
                        console.log("find all error", err);
                        res.json(err);
                    } else {
                        console.log("found all surveys");
                        res.json(results);
                    }
                });
            }

        });
    },

    getAll: function (req, res) {
        Survey.find({}, function (err, results) {
            if (err) {
                console.log("find all error", err);
                res.json(err);
            } else {
                console.log("found all surveys");
                res.json(results);
            }
        });
    },
    
    getOne: function (req, res) {
        Survey.findById(req.params.id, function (err, result) {
            if (err) {
                console.log("find one error", err);
                res.json(err);
            } else {
                console.log("found one survey");
                res.json(result);
            }
        });
    },

    deleteSurvey: function (req, res) {
        Survey.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                console.log("delete err", err);
            } else {
                console.log("survey DELETED");
                Survey.find({}, function (err, results) {
                    if (err) {
                        console.log("find all error", err);
                        res.json(err);
                    } else {
                        console.log("found all surveys");
                        res.json(results);
                    }
                });
            }
        });
    },
    
    updateSurvey: function (req, res) {
        Survey.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, survey) {
            if (err) {
                console.log("update err", err);
                res.json(err);
            } else {
                console.log("survey updated", survey);
                res.json(survey);
            }
        });
    }
};