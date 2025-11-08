require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('./models/Item');
const Score = require('./models/Score');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/jogo-odontologico';
const items = [
    {
        name: 'Agulha hipodérmica',
        category: 'Perfurocortante',
        image_url: '/images/Agulha.jpeg',
        description: 'Siringa e agulha usadas.'
    },
    {
        name: 'Restos de alimento',
        category: 'Comum',
        image_url: '/images/Alimentos.jpeg',
        description: 'Sobras de alimentos.'
    },
    {
        name: 'Ampola de anestésico',
        category: 'Perfurocortante',
        image_url: '/images/Ampola.jpeg',
        description: 'Ampola de medicamento/anestésico.'
    },
    {
        name: 'Capote descartável',
        category: 'Biológico',
        image_url: '/images/Capote.jpeg',
        description: 'Vestimenta de proteção.'
    },
    {
        name: 'Copo descartável',
        category: 'Comum',
        image_url: '/images/Copo.jpeg',
        description: 'Copo plástico.'
    },
    {
        name: 'Luva de procedimento usada',
        category: 'Biológico',
        image_url: '/images/Luva.jpeg',
        description: 'Luva de látex.'
    },
    {
        name: 'Luva nitrílica',
        category: 'Biológico',
        image_url: '/images/LuvaNitrile.jpeg',
        description: 'Luva de nitrila.'
    },
    {
        name: 'Massa para molde',
        category: 'Comum',
        image_url: '/images/Massa.jpeg',
        description: 'Material utilizado para moldagem.'
    },
    {
        name: 'Fio de nylon',
        category: 'Comum',
        image_url: '/images/Nylon.jpeg',
        description: 'Fio usado para amarrações ou fixações.'
    },
    {
        name: 'Papel toalha',
        category: 'Comum',
        image_url: '/images/Papel.jpeg',
        description: 'Utilizado para secagem.'
    },
    {
        name: 'Plástico para encapar/adesivo',
        category: 'Biológico',
        image_url: '/images/Plastico.jpeg',
        description: 'Filme plástico.'
    },
    {
        name: 'Revelador radiográfico',
        category: 'Químico',
        image_url: '/images/Revelador.jpeg',
        description: 'Solução química usada para revelação de radiografias odontológicas.'
    },
    {
        name: 'Touca descartável',
        category: 'Biológico',
        image_url: '/images/Touca.jpeg',
        description: 'Touca de proteção.'
    }
    
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