const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 8000;
const cors = require('cors')
const athleteRoutes = require('./routes/athleteRoutes')
const userRoutes = require('./routes/userRoutes')
const mutler = require('multer');
const cloudinary = require('cloudinary');
const {cloudinaryStorage} = require('multer-storage-cloudinary');

require('./database/connection')
require('dotenv').config();

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('/athletes')
    res.json ('Welcome to the High School Athlete')
})

app.use('/routes/athleteRoutes', athleteRoutes)
app.use('/routes/userRoutes', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})