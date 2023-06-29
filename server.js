const express = require(`express`)
const cors = require(`cors`)
// const path = require('path');
// const mongoose = require(`mongoose`)
const webRoutes = require(`./Server_src/Routers/WebDataRoutes`);


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(`/api/webData/`, webRoutes);


const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 8000}`);
});