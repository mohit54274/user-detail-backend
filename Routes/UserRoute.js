
const express  = require('express');
const app = express();
const User = require("../Controllers/UserController");
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.post('/reg', User.createUser);
app.get('/', User.allUsers);


app.delete('/:uid',User.deleteUser);
app.put('/:uid',User.updateUser);



module.exports= app;