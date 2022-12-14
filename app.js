const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


