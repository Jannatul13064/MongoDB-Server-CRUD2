**MongoDB-Server-CRUD2**

##npm install express mongodb cors dotenv


#Connection to mongoDB

#Insert a Document


## // Connection to Database and Insert a document


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

