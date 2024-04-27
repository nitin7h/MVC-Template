const express = require("express")



const routes = require("./routes/router")
const databaseConnection = require("./database/connection")
const { middlewareFunction } = require("./middlewares/middlewaere")

const app = express()
const PORT = 7000;


//midlleware-plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// middleware
app.use(middlewareFunction(arguments))



//DataBase Connection
const url = "mongodb://localhost:27017/MongoProject"
databaseConnection(url)



//Rotes
app.use("/", routes)



app.listen(PORT, () => {
    console.log(`Port listening on  http://localhost:${PORT} `);
})