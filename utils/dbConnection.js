const dbConnect = () =>{
    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testUser:1XvEknc0iM5lOWLe@users.jwqy61y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
    try {
      
        await client.connect();
        const serviceCollection = client.db('testusers').collection('user');

        
    }
    finally {

    }

};
run().catch(console.dir);

}

module.exports = dbConnect;