require('dotenv').config();
const accountSid = process.env.accountSID;
const authToken = process.env.authTOKEN;
//const PORT = process.env.PORT || 5000;

const client = require('twilio')(accountSid, authToken);

const server = require("./server.js");



server.get('/api',(req,res) => {
   client.messages
    .create({
        body: 'Hello from Twilio',
        from: '+18886896605',
        to: '+16199028420'
    })
    .then(message =>  res.send(`I'm here ${message.sid}`));
   ;
  });


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { console.log(`\n=== Server listening on port ${PORT} ===\n`); });