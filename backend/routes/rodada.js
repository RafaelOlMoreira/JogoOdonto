const express = require('express');
const router = express.Router();
const Score = require('../models/Score');
// POST /api/rodada
// body: { playerIdentifier, points }
router.post('/', async (req, res) => {
    try {
        const { playerIdentifier, points } = req.body;
        if (!playerIdentifier || typeof points !== 'number') {
            return res.status(400).json({
                error: 'playerIdentifier and points required' });
}
const score = new Score({ playerIdentifier, points });
            await score.save();
            return res.json(score);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'server error' });
        }
    });
// GET /api/ranking?limit=10
router.get('/ranking', async (req, res) => {
    try {
        const limit = Math.min(parseInt(req.query.limit) || 10, 100);
        const top = await Score.find().sort({
            points: -1, createdAt:
                1
        }).limit(limit).lean();
        return res.json(top);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'server error' });
    }
});
module.exports = router;