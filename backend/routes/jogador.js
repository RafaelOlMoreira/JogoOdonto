const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.post('/', async (req, res) => {
    try {
        const { identifier } = req.body;
        if (!identifier || String(identifier).trim() === '') {
            return res.status(400).json({ error: 'identifier is required' });
        }
        const id = String(identifier).trim();
        let player = await Player.findOne({ identifier: id });
        if (!player) {
            player = new Player({ identifier: id });
            await player.save();
        }
        return res.json({ id: player._id, identifier: player.identifier });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'server error' });
    }
});
module.exports = router;
