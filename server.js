const express = require("express");
const app = express();

// Require and configure
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 3000; // Set a default port if PORT is not specified in the .env file

const connectdb = require("./config/connectdb");


// Ensure connectDb returns a Promise or uses asynchronous code to connect to the database
(async () => {
  try {
    await connectdb(); // Assuming connectDb returns a Promise
    console.log("Connected to the database");

    
app.use('/api/user' , require ('./routes/user'))

app.use('/api/admin' , require ('./routes/admin'))

app.use('/api/product' , require ('./routes/product'))

app.use ('/api/messages' , require ('./routes/messages'))

app.use ('/api/order' , require ('./routes/order'))

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
