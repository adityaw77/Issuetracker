const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const issueRoutes = require('./routes/issueRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/issueDB')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use('/api/issues', issueRoutes);
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});