const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => { 
    res.json({
        isSuccess: true,
        message: 'Welcome to the API',
        endpoint: '/api/users'
    })
});

const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);