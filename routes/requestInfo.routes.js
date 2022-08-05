const router = require("express").Router();
const mongoose = require('mongoose');
const RequestInfo = require("../models/RequestInfo")



  
  // GET /api/request -  Retrieves all of the RequestInfo
  router.get('/', (req, res, next) => {
    RequestInfo.find()
      .then(allInfo => res.json(allInfo))
      .catch(err => res.json(err));
  });

//  POST /api/RequestInfo  -  Creates a new RequestInfo

router.post('/', (req, res, next) => {
    console.log(req.headers)
    console.log(req.body)
    const { Firstname, Lastname, email, phone, area } = req.body;

  
    RequestInfo.create({ Firstname, Lastname, email, phone, area })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });

  
  //  GET /api/request/:request infoId -  Retrieves a specific request info by id
  router.get('/detail/:RequestInfoId', (req, res, next) => {
    const { RequestInfoId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(RequestInfoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    // Each request info document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    RequestInfo.findById(RequestInfoId)
      .then(RequestInfo => res.status(200).json(RequestInfo))
      .catch(error => res.json(error));
  });
   
   
  // PUT  /api/request/:request infoId  -  Updates a specific request info by id
  router.put('/:RequestInfoId', (req, res, next) => {
    const { RequestInfoId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(RequestInfoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    RequestInfo.findByIdAndUpdate(RequestInfoId, req.body, { new: true })
      .then((updatedRequestInfo) => res.json(updatedRequestInfo))
      .catch(error => res.json(error));
  });
   
   
  // DELETE  /api/request/:RequestInfoId  -  Deletes a specific RequestInfo by id
  router.delete('/:RequestInfoId', (req, res, next) => {
    const { RequestInfoId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(RequestInfoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    RequestInfo.findByIdAndRemove(RequestInfoId)
      .then(() => res.json({ message: `RequestInfo with ${RequestInfoId} is removed successfully.` }))
      .catch(error => res.json(error));
  });



 module.exports = router;