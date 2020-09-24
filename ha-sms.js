exports.handler = async (event) => {

  let receiver = event['receiver'];
  let sender = event['sender'];
  let message = event['message'];

  let isPromotional = true;

  console.log("Sending message", message, "to receiver", receiver);

  return 'Successfully executed';
}