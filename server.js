const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => { 
    res.json({
        isSuccess: true,
        message: 'Welcome to the API',
        endpoint: '/api/users'
    })
});

const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);