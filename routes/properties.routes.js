const router = require("express").Router();
const mongoose = require('mongoose');
/*AQUÍ TENGO QUE REQUERIR EL MODELO */

/* page of properties */
router.get("/", (req, res, next) => {
    res.json("Properties");
  });

/*Create a new property or edit the progress of one */
router.post("/properties", (req, res, next) => {
    const {body} = req.body;
//Crear un nuevo proyecto con la info de req.body  
properties.create({ title, description, tasks: [] })
.then((response) => res.json(response))
.catch((err) => res.json(err));
});

// GET /api/properties -  Retrieves all of the properties
//Populate nos ayuda a poblar/obtener los datos que estan vinculados con el id en
//tasks[]
router.get('/properties', (req, res, next) => {
properties.find()
.populate('tasks')
.then(allproperties => res.json(allproperties))
.catch(err => res.json(err));
});


//  GET /api/properties/:propertiesId -  Retrieves a specific properties by id
router.get('/properties/:propertiesId', (req, res, next) => {
const { propertiesId } = req.params;

if (!mongoose.Types.ObjectId.isValid(propertiesId)) {
res.status(400).json({ message: 'Specified id is not valid' });
return;
}

// Each properties document has `tasks` array holding `_id`s of Task documents
// We use .populate() method to get swap the `_id`s for the actual Task documents
properties.findById(propertiesId)
.populate('tasks')
.then(properties => res.status(200).json(properties))
.catch(error => res.json(error));
});


// PUT  /api/properties/:propertiesId  -  Updates a specific properties by id
router.put('/properties/:propertiesId', (req, res, next) => {
const { propertiesId } = req.params;

if (!mongoose.Types.ObjectId.isValid(propertiesId)) {
res.status(400).json({ message: 'Specified id is not valid' });
return;
}

properties.findByIdAndUpdate(propertiesId, req.body, { new: true })
.then((updatedProperties) => res.json(updatedproperties))
.catch(error => res.json(error));
});


// DELETE  /api/properties/:propertiesId  -  Deletes a specific properties by id
router.delete('/properties/:propertiesId', (req, res, next) => {
const { propertiesId } = req.params;

if (!mongoose.Types.ObjectId.isValid(propertiesId)) {
res.status(400).json({ message: 'Specified id is not valid' });
return;
}

properties.findByIdAndRemove(propertiesId)
.then(() => res.json({ message: `properties with ${propertiesId} is removed successfully.` }))
.catch(error => res.json(error));
});


module.exports = router;