const router = require('express').Router()
const athleteController = require('../controllers/athleteController')
const imageExport = require('../database/cloudinary')

router.get('/new', imageExport.single('images'), athleteController.newRoute)
router.get('/', athleteController.index);
router.get('/:id', athleteController.showOneAthlete);
router.get('/:id/edit', imageExport.single('images') ,athleteController.editRoute);
router.post('/', imageExport.single('images'), athleteController.createNewAthlete);
router.put('/:id', imageExport.single('images'), athleteController.updateAthleteProfile);
router.delete('/:id', athleteController.deleteAthlete);

 
module.exports = router;