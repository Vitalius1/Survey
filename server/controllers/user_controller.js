module.exports = {

    loginUser: (req, res) => {
        console.log("login user", req.body.name);
        req.session.username = req.body.name;
        res.json({ username: req.session.username });
    },

    // checkSession: (res, req) => {
    //     if (req.session.username) {
    //         res.json({ username: req.session.username, logged: true });
    //     } else {
    //         res.json({logged:false});
    //     }
    // }
};