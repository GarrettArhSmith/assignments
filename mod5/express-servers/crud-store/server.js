const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/crudstore', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)