const express = require('express')
const app = express()

//root route
app.get("/", (req, res) => {
    res.send("You are home!")
})

app.listen(3000, (req, res) => {
    console.log("We are listening on port 3000...")
})

app.get("/greeting/:name", (req, res) => {
    // res.send("Hello, stranger")
    name = req.params.name 
    res.send(`Wow! Hello there, ${name}! It's so great to see you!`)
})

app.get("/tip/:total/:percentage", (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt((total * req.params.percentage) / 100)

    res.send(`${tipPercentage}`)    
})
