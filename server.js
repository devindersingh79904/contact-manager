const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Contact keeper app' });
});

//InitMiddleware
app.use(express.json({ extended: false }));
//Define Routers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`node server is start on port ${PORT}`);
});
