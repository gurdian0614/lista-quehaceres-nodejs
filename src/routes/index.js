const {Router} = require('express');
const router = Router();

router.get('/tasks', (req, res) => {
    res.send('tasks....');
})

module.exports = router;