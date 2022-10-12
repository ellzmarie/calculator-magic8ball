// GETTING STARTED
const express = require('express')
const app = express()

//root route
app.get("/", (req, res) => {
    res.send("You are home!")
})



// GREETINGS
app.get("/greeting/:name", (req, res) => {
    // res.send("Hello, stranger")
    name = req.params.name 
    res.send(`Wow! Hello there, ${name}! It's so great to see you!`)
})

// TIP CALCULATOR
app.get("/tip/:total/:percentage", (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt((total * req.params.percentage) / 100)

    res.send(`${tipPercentage}`)    
})

// MAGIC 8 BALL
app.get("/magic/:question", (req, res) => {
    // const question = req.params.question
    // let randomResp = Math.floor(Math.random() * (magicEightResp.length))

    const magicEightResp = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
        ]
    
    res.send(`
        <h1>You asked: <br>${req.params.question}.</br>  
        <br>Let's see your future: <br>${magicEightResp[Math.floor(Math.random() * (magicEightResp.length))]}</br></br></h1>
        `)
})

app.listen(3000, (req, res) => {
    console.log("We are listening on port 3000...")
})