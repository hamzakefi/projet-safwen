const express = require("express");
const app = express();

// Require and configure
require("dotenv").config();
app.use(express.json());
const connectDB = require ('./config/connectdb')
connectDB();

    
app.use('/api/user' , require ('./routes/user'))

app.use('/api/admin' , require ('./routes/admin'))

app.use('/api/product' , require ('./routes/product'))

app.use ('/api/messages' , require ('./routes/messages'))

app.use ('/api/order' , require ('./routes/order'))

const PORT = process.env.PORT 

app.get('/', (req, res) => {
    res.send('Hello from Node.js!')
})

app.listen(PORT , error =>{
    
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
}) 