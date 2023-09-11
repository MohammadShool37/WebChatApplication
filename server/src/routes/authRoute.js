const { Router } = require('express')
const fs = require('fs');
const path = require('path');
const router = Router()

router.get('/login', (req, res) => {

    const result = {
        "status": false,
        "data": {}
    }

    const username = req.session.username || req.query.username;
    const password = req.session.password || req.query.password;

    if (!username || !password) {
        res.json({ "status": false, "data": { "error": "Invalid Username" } });
    }

    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf8'));

    let findedUser = users.find((x) => x.username == username)
    if (!findedUser) {
        result.status = false;
        result.data = { "error": "User not found" };
        res.json(result);
    }

    if (password != findedUser.password) {
        result.status = false;
        result.data = { "error": "Password mismatch" };
        res.json(result);
    }

    result.status = true;
    result.data = {
        username
    }

    req.session.username = username;
    req.session.password = password;

    res.json(result);
});

router.get('/register', (req, res) => {
    res.json({
        status: false,
        data: { error: "coming soon..." }
    })
});

module.exports = router;