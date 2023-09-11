const { app } = require('./app')
const authRouter = require('./routes/authRoute');

app.use('/auth', authRouter);