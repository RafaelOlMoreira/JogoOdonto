require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jogadorRoutes = require('./routes/jogador');
const itensRoutes = require('./routes/itens');
const rodadaRoutes = require('./routes/rodada');
const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use('/api/jogador', jogadorRoutes);
app.use('/api/itens', itensRoutes);
app.use('/api/rodada', rodadaRoutes);
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/jogoodontologico';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology:
        true
})
    .then(() => {
        console.log('Mongo ok');
        app.listen(PORT, () => console.log('Server running on port', PORT));
    })
    .catch(err => {
        console.error('Mongo connection error', err);
        process.exit(1);
    });