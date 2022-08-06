const dbConnect = require('./db')
const {ObjectId} = require('mongodb')
require('dotenv').config()
const capacity = process.env.CAPACITY

async function addOrder(req,res)
{
    const collection = await dbConnect();
    const result = await collection.insertOne(req.body);
    res.send({Response : result})
}
async function updateDetail(req,res)
{
    const collection = await dbConnect();
    const result = await collection.updateOne({id : Number(req.params.id)},{
        $set : {detail : req.body.detail}
    })
    res.send({Response : result})
}
async function updateStatus(req,res)
{
    const collection = await dbConnect();
    const result = await collection.updateOne({id : Number(req.params.id)},{
        $set : req.body
    })
    res.send({Response : result})
}
async function deleteOder(req,res)
{
    const collection = await dbConnect();
    const result = await collection.deleteOne({id : Number(req.params.id)});
    res.send({Response : result})
}
async function checkCapacity(req,res)
{
    const collection = await dbConnect();
    const result = await collection.find({date:req.params.date}).toArray();
    let restCapacity=0
    for(let i in result)
        restCapacity =capacity-result[i].capacityDelevered
    res.json({"rest capacity for the day" : restCapacity,result})
}
async function getData(req,res)
{
    const collection = await dbConnect();
    const result = await collection.find({}).toArray();
    res.json({result})
}
async function getDataById(req,res)
{
    const collection = await dbConnect();
    const result = await collection.findOne({id : Number(req.params.id)});
    res.json({result})
}

module.exports = {
    addOrder: addOrder,
    updateDetail:updateDetail,
    updateStatus:updateStatus,
    deleteOder:deleteOder,
    checkCapacity:checkCapacity,
    getDataById : getDataById,
    getData : getData
}