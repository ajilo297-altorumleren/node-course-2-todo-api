// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5addba469e6619b8eda97c07')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch the todos');
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos Count:', count);
    // }, (error) => {
    //     console.log('Unable to fetch the todos');
    // })

    db.collection('Users').find({name: 'Ajil Oommen'})
        .toArray().then((docs) => {
            console.log(JSON.stringify(docs,undefined,2));
        });

    // db.close();
});