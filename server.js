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
    //don't forget const or let, it remove the strikethrough cause name has some built in abilities in js
    const name = req.params.name 
    res.send(`Wow! Hello there, ${name}! It's so great to see you!`)
})

// TIP CALCULATOR
app.get("/tip/:total/:percentage", (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt((total * req.params.percentage) / 100)

    res.send(`${tipPercentage}`)    
})
//i'd keep my data sets outside of the routes for cleaner code
const magicEightResp = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
    ]
// MAGIC 8 BALL
app.get("/magic/:question", (req, res) => {
    // i like how you wrote out variables to use and was curious as to why you commented them out, they work great. I is a good technique to break up your code into variables so that you can change just the variable for ease.
    const question = req.params.question
    let randomResp = Math.floor(Math.random() * (magicEightResp.length))
    res.send(`
        <h1>You asked: <br>${question}.</br>  
        <br>Let's see your future: <br>${magicEightResp[randomResp]}</br></br></h1>
        `)
})

app.listen(3000, (req, res) => {
    console.log("We are listening on port 3000...")
})