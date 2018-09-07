let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let itemCode = "CHICKP";

    ddb.delete({
        TableName: 'BTMenu',
        Key: { 'itemCode': itemCode }
    }).promise().then(function (data) {
        console.log("Deleted", itemCode, data);
        callback(null, "Deleted");

    }).catch(function (err) {
        console.log("Failed", itemCode, err);
        callback(err);
    });
}