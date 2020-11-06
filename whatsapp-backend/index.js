import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessages.js'
import Pusher from 'pusher'

//app config
const app = express();
const port = process.env.PORT || 9000


const pusher = new Pusher({
  appId: "1103002",
  key: "4ca2bbefad58cb5d58b8",
  secret: "25329d496974bafc5db4",
  cluster: "ap2",
  useTLS: true
});



//middlewares
app.use(express.json());

//DB config

const connection_url = `mongodb+srv://admin:b43h3hOCvMxWUXxe@cluster0.gzukk.mongodb.net/whatsappdb?retryWrites=true&w=majority`
mongoose.connect(connection_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})

const db = mongoose.connection

db.once('open', () => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    console.log(changeStream);

    changeStream.on('change', (change) => {
        console.log('A change occurred',change);
    })
})


//apis
app.get('/',(req, res) => {
    return res.status(200).send('hello world')
})

app.get('/messages/sync',(req,res) => {
    Messages.find({}, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
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