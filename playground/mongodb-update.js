// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5addcc749e6619b8eda98273')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5addb5702a80892f54452e09')
    }, {
        $set: {
            name: 'Ajil Oommen'
        }, $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    })

    // db.close();
});