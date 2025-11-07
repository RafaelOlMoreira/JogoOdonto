require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('./models/Item');
const Score = require('./models/Score');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/jogo-odontologico';
const items = [
    {
        name: 'Luvas descartáveis usadas',
        category: 'Infectante',
        image_url: '/images/Luvas.jpg',
        description: 'Luvas contaminadas com sangue e fluidos.'
    },
    {
        name: 'Papelão da caixa de luvas',
        category: 'Reciclável',
        image_url: '/placeholders/papelao.webp',
        description: 'Papelão limpo e seco.'
    },
    {
        name: 'Sugador descartável',
        category: 'Comum',
        image_url: '/placeholders/sugador.webp',
        description: 'Peças plásticas não contaminadas.'
    },
    {
        name: 'Agulha',
        category: 'Perfurocortante',
        image_url: '/placeholders/agulha.webp',
        description: 'Material perfurocortante contaminado.'
    }
    // adicione mais itens conforme necessário
];
async function seed() {
    await mongoose.connect(MONGO_URI);
    console.log('Connected for seed');
    await Item.deleteMany({});
    await Score.deleteMany({});
    await Item.insertMany(items);
    console.log('Seed complete');
    process.exit(0);
}
seed().catch(err => {
    console.error(err);
    process.exit(1);
});