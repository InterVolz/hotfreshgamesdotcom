const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
const port = 3000;

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'pathOfExileStats';

app.use(express.static('public'));


const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongo() {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client.db(dbName);
}

app.get('/api/characters', async (req, res) => {
    const db = await connectToMongo();
    const collection = db.collection('characters');
    const characters = await collection.find({}).toArray();
    res.send(characters);
});

app.get('/api/history', async (req, res) => {
    const time = req.query.time;
    const db = await connectToMongo();
    const collection = db.collection('historyLog');
    
    // Logic to fetch history based on the 'time' parameter
    // This is a placeholder; adjust according to your actual logic and data structure
    const history = await collection.find({ timestamp: { $lte: new Date(time) } }).toArray();
    
    res.send(history);
});

app.post('/api/updateCharacter', async (req, res) => {
    const { name, updates } = req.body;
    const db = await connectToMongo();
    const collection = db.collection('characters');
    
    await collection.updateOne({ name: name }, { $set: updates });
    res.send({ message: 'Character updated successfully' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
