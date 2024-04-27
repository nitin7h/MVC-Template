const mongoose = require("mongoose")


async function databaseConnection(url) {
    mongoose.connect(url)
        .then(() => {
            console.log("DataBase connected...")
        })
        .catch((err) => {
            console.log(err);
        })
}


module.exports = databaseConnection