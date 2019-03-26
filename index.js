const express = require("express");
const app = express();
const port = 3000;
const csvFilePath = ("events.csv")
const csv = require ('csvtojson')
const Geocoder = require('node-geocoder')

const options = {
    provider: "google",
    httpAdapter: "https",
    apiKey: "AIzaSyACsxqvyQqTNDs5xfe9xNicX0JME7e3ixw",
    formatter: null  
}

const geocoder = Geocoder(options)



app.get("/", (req, res) => {
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj)
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
