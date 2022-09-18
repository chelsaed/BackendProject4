const Athlete = require ('../models/athlete')
const {uploads} = require('../database/cloudinary')


const index = (req, res) => {
    Athlete.find({}, (err, athlete)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(athlete)

    })
}

const showOneAthlete = (req, res) => {
    Athlete.findById(req.params.id, (err, athlete)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(athlete)
    })
}

const createNewAthlete = async (req, res) => {
    console.log(req.fil);
    if(req.file){
    req.body.images = req.file.path;
    }
    console.log(req.body)
    let newAthlete = await Athlete.create(req.body)
    newAthlete.save(() => console.log('new athlete saved'));
    Athlete.findById(newAthlete._id)
    res.json(newAthlete)

}

const updateAthleteProfile = (res, req) => {
    console.log(req.file);
     if(req.file){
        req.body.images = req.file.path;
    }
    console.log(req.body);
    Athlete.findByIdAndUpdate(req.params.id, req.body, (err, athlete)=> {
        if(err){
            res.status(400).json(err)
            return
        }
        Athlete.find({}, (error, athlete) =>{
            res.json(athlete)
        })
    })
}

const deleteAthlete = (req, res) => {
    Athlete.findByIdAndDelete(req.params.id, (err, athlete) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(athlete)
    })

}

const newRoute = (req, res) => {
    res.render('new')
}

const editRoute = (req, res) => {
    res.json('edit', {athlete: Athlete, id: req.params.id})
    };  

module.exports = {
    index,
    showOneAthlete,
    createNewAthlete, 
    updateAthleteProfile, 
    deleteAthlete, 
    newRoute, 
    editRoute
}