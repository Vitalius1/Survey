

module.exports = {

    loginUser: (req, res) => {
        console.log("login user", req.body.name);
        req.session.username = req.body.name;
        console.log("My session: ", req.session.username);
        res.json({ username: req.session.username });
    },

    checkSession: (req, res) => {
        if (req.session.username) {
            console.log("CHECKING SESSION", req.session.username);
            res.json({ username: req.session.username, logged: true });
        } else {
            console.log('no req or no req.session');
            res.json({ logged: false });
        }
    },
    
    logout: (req, res) => {
        if (req.session.username) {
            console.log("CHECKING SESSION", req.session.username);
            req.session.destroy();
            console.log("Session destroyed");
            res.json( true );
        } else {
            console.log('No Session to logout');
            res.json(false);
        }
    }
};