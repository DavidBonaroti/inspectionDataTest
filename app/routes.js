//express router
const express = require('express'),
router = express.Router(),
mainController = require('./controllers/main.controller'),
dataController = require('./controllers/data.controller');

module.exports = router;


router.get('/', mainController.showHome);

router.get('/data', dataController.showDatas);
