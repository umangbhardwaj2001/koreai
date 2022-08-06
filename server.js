const express = require('express')
const apis = require('./src/apis')
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = express()
app.use(express.json())

const router = express.Router();
app.use('/',router);
router
    .route('/')
    .get(apis.getData)
router
    .route('/add')
    .post(apis.addOrder)
router
    .route('/:id')
    .get(apis.getDataById)
router
    .route('/update/:id')
    .put(apis.updateDetail)
router
    .route('/updateStatus/:id')
    .put(apis.updateStatus)
router
    .route('/delete/:id')
    .delete(apis.deleteOder)
router
    .route('/checkCapacity/:date')
    .get(apis.checkCapacity)

app.listen(port,err=>{
    if(err)console.log('ERROR', err);
    console.log('server running at port number ',port);
})