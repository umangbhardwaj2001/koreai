const {MongoClient} = require('mongodb');
require('dotenv').config()
const url = process.env.URL
const database = 'Milk-DataBase';

const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('capacity')
}

module.exports = dbConnect;