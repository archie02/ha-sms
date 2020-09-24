const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

    let receiver = event['receiver'];
    let sender = event['sender'];
    let message = event['message'];

    let isPromotional = true;
    try {
        let data = await sns.publish({
            Message: message,
            PhoneNumber: receiver,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: "String",
                    StringValue: "Promotional"
                },
                'AWS.SNS.SMS.SenderID': {
                    DataType: "String",
                    StringValue: sender
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    console.log("Sending message", message, "to receiver", receiver);

    return 'Successfully executed';
}