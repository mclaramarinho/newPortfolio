
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Mailgun from 'mailgun-js'
import { config, configDotenv } from 'dotenv'
config()

const domainName = 'sandboxe5805d8b2cc44449b1e00a6c10308837.mailgun.org';
const API_KEY = process.env['MAILGUN_API_KEY'];

const mg = Mailgun({
    apiKey: API_KEY,
    domain: domainName
});

const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});


const app = express();
app.use(cors({
    origin: '*',
    methods: ['POST'], 
}))

app.use(urlEncodedParser);
app.use(bodyParser.json())


app.post('/send-message', async (req, res) => {
    console.log(req);
    const data = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message
    };
    const sent = await sendMessage(data)
    res.end(JSON.stringify(sent))
})



app.listen(3001, () => {
    console.log('Server started')
})





async function sendMessage(d){
    const data = {
        from: 'portfolio@claramarinho.com',
        to: "marinho.claramb@gmail.com",
        subject: "New Message From Your Portfolio",
        text: `
            Sent by: ${d.name}
            Contact info: ${d.email} | ${d.phoneNumber}
            Message: ${d.message}
        `
    };
    
    const response = await mg.messages().send(data, (err, body) => {
        console.log(body)
    })
    return response
}