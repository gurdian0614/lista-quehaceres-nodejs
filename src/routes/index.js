const {Router} = require('express');
const router = Router();
const { getTasks } = require('../controllers');

router.get('/tasks', getTasks);

module.exports = router;