const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { logger } = require('./middleware/logger');
const connectDB = require('./config/dbConn');


dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
    origin:true
}
// middlewares
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Welcome to the Doctime API');
});





app.listen(PORT, () => {
    
    connectDB();
    console.log(`Server is running on port ${PORT}`)

});


module.exports = app;
