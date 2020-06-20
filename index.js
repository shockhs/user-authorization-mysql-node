const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mysql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const http = require('http')


dotenv.config()

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

//ROUTES IMPORT
const authRoute = require('./routes/auth')

// DATABASE
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

db.connect((err) => {
    if (err)
        console.log(err);
    else console.log('MySQL Connected...');
})

//Middleware 
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use('/api/auth', authRoute)


// Route Middleware
app.get('/', (req, res) => {
    res.send("<h4>Server up and running</h4>")
})


server.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})
