const { MongoClient, ObjectId } = require('mongodb');
const debug = require('debug')('app:mongo');
const  { config } = require('../config');

const MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = config.dbName;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect(err => {
                if(err) {
                    reject(err)
                }

                debug('Connected succesfully to mongodb');
                resolve(this.client.db(this.dbName))
            })
        })
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        });
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data);
        })
        .then(result => result.insertedId);
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        })
        .then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id) });
        })
        .then(() => id);
    }
}

module.exports = MongoLib;