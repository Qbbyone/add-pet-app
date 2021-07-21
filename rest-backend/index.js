const express = require("express");
const petRouter = require('./routes/pet.routes')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

app.use('/api', petRouter)




app.listen(PORT, () => console.log(`server has been started on port ${PORT}`));


 