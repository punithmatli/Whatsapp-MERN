import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessages.js'

//app config
const app = express();
const port = process.env.PORT || 9000

//middlewares
app.use(express.json());

//DB config

const connection_url = `mongodb+srv://admin:b43h3hOCvMxWUXxe@cluster0.gzukk.mongodb.net/whatsappdb?retryWrites=true&w=majority`
mongoose.connect(connection_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})


//apis
app.get('/',(req, res) => {
    return res.status(200).send('hello world')
})

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err , data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(`New message created: ${data}`)
        }
    })
})

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))