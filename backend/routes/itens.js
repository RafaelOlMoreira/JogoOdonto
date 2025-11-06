const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
// GET /api/itens?limit=12
router.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 100;
        const items = await Item.aggregate([{
            $sample: {
                size: Math.min(limit,
                    1000)
            }
        }]);
        return res.json(items);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'server error' });
    }
});
module.exports = router;