const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const port = process.env.PORT || 5001;

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server only if not in Vercel environment (Vercel exports the app)
if (require.main === module) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = app;
