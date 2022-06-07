const express = require('express');
const controller = require('../controllers/item');
const router = express.Router();

// localhost:5000/api/item/electronics
router.get('/electronics', controller.getAll);
// localhost:5000/api/item/electronics/:id
router.get('/electronics/:id', controller.getById);

module.exports = router;