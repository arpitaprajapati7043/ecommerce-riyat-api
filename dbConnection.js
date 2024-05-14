const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL)
.then(() => console.log("Database connected successfully"))
.catch(err => console.error("Database connection failed", err));
