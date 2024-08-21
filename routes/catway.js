const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getCatways, getCatwayById, createCatway, updateCatway, deleteCatway } = require('../controllers/catwayController');


router.get('/', auth, getCatways);
router.get('/:id', auth, getCatwayById);
router.post('/', auth, createCatway);
router.put('/:id', auth, updateCatway);
router.delete('/:id', auth, deleteCatway);

module.exports = router;
