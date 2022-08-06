### Dairy milk distribition API

Here Express and MongoDB is used. this API is hosted on the heroku.
API [link](https://b-kore.herokuapp.com/).
Paste this API link in postman and perform HTTP methods.

#### To run locally on machine

```bash
clone this repository
npm install
npm start
```

then goto > localhost:3000

##### HTTP methods

1.  `get('/')`
    - This API will retreive all the data stored in mongoDB
2.  `post('/add')`
    - This API will post the Data into MongoDB
    - ##### Boiler plate for Post Object
      ```json
      {
        "id": 201,
        "placed": true,
        "packed": true,
        "dispatched": true,
        "delivered": true,
        "capacityDelevered": 90,
        "date": "01august2023",
        "detail": "tonned milk"
      }
      ```
3.  `get('/:id')`
    - This API wil retreive the data to which id is matched
4.  `put('/update/:id')`
    - tihs API will update the detail of milk
    - ##### Boilerplate for put object
    ```json
    {
      "detail": "full cream"
    }
    ```
5.  `put('/updateStatus/:id')`

    - This API will update Ordre status
    - ##### Boilerplate for Put object

    ```json
    {
      "placed": true,
      "packed": true,
      "dispatched": true,
      "delivered": true
    }
    ```

6.  `delete('/delete/:id')`
    - This API will delete data from MongoDB of Id is matched
7.  `get('/checkCapacity/:date')`
    - This API will retrieve the rest capacity on a perticular day to be deleverd (considering MAX capacity be 100)
