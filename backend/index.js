const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db")
const fileUpload = require("express-fileupload");

connectDB();

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser());

app.use(fileUpload({
    debug: true,
    useTempFiles: true,
    // tempFileDir: path.join(__dirname,"./temp")
}));


app.use(express.static("uploads"));

//Admin Routes
app.use('/admin/auth', require('./routes/Admin/authRoute'))
app.use('/admin/other', require('./routes/Admin/otherRoute'))

const PORT = 8000

// Generic error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})

// Handle unhandled exceptions globally
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Optionally, you can gracefully shut down the server or perform any cleanup
    // server.close(() => process.exit(1));
});

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    // Optionally, you can gracefully shut down the server or perform any cleanup
    // server.close(() => process.exit(1));
});