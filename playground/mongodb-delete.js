// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server')

    // Delete many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // Delete One
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //         console.log(result);
    //     });

    // FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({
        name: 'Ajil Oommen'
    }).then((res) => {
        console.log(res);
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5addb66ad667c727e41289ef")
    }).then((res) => {
        console.log(res);
    });

    // db.close();
});