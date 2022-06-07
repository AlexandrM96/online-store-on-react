const Item = require('../models/Item');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

module.exports.getAll = function (req, res) {
    try {
        mongoClient.connect(function (err, client) {
            const db = client.db("myStore");
            const items = db.collection("item");
            items.find().toArray(function (err, results) {
                res.status(200).json({
                    results
                })
            });
            if (err) {
                return console.log(err);
            }
        });

    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.getById = async function (req, res) {
    try {
        mongoClient.connect(function (err, client, id) {
            const db = client.db("myStore");
            const items = db.collection("item");
            items.find({ id: req.params.id }).toArray(function (err, result) {
                res.status(200).json({
                    result
                })
            });
            if (err) {
                return console.log(err);
            }
        });
    } catch (e) {
        errorHandler(res, e);
    }
}