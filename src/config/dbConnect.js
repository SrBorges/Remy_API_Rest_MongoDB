import mongoose from "mongoose";

const key = "mongodb+srv://******:*****@projectx.ylvdlo0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(key, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection

db.on("error", (err) => {

    console.error("Connection failure: ", err)

})

db.once("open", () => {

    console.log("Connection success")

})

export default db