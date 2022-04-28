const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleWare
app.use(cors());


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@recapcluster.qfb1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollections = database.collection("users");
        // create a document to insert
        const doc = {
            title: "Food History",
            content: "Food is a great historical matter.By born we need food.",
        }
        const result = await usersCollections.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Running my crud server');
})

app.listen(port, () => {
    console.log('Hitting my server', port);
})