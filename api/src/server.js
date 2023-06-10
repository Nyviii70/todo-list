const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/todos', require('./routes/todo'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});