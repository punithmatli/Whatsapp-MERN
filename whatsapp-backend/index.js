import express from 'express'

//app config
const app = express();
const port = process.env.PORT || 9000

//middlewares

//DB config

//apis
app.get('/',(req, res) => {
    return res.status(200).send('hello world')
})

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))