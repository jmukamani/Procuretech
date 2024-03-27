const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/requisitions', require('./routes/requisitions'));
app.use('/api/tenders', require('./routes/tenders'));
app.use('/api/contracts', require('./routes/contracts'));
app.use('/api/payments', require('./routes/payments'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});