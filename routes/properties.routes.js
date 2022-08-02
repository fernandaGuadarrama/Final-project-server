const router = require("express").Router();
const mongoose = require('mongoose');
const Properties = require("../models/Properties")


  //All the properties
  router.get("/", async (req, res) => {
    try {
      const properties = await Properties.find();
      res.json(properties);
    } catch (err) {
      console.log(err);
    }
  });

  //Property detail by id
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const Properties = await Properties.findById(id);
      res.json(properties);
    } catch (err) {
      console.log(err);
    }
  });

  // POST http://localhost:5005/api/propertiess
  //Crear properties recibir los datos en req.body
  router.post("/", (req, res) => {
    const { body } = req;

    console.log(body);

    Properties.create(body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  // PUT http://localhost:5005/api/propertiess
  // Edit the property after recibe the data on req.body
  // receive the properties id in the params
  router.put("/:id", (req, res) => {
    const { body } = req;
    const { id } = req.params;

    console.log(body);

    properties.findByIdAndUpdate(id, body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  module.exports = router;

    //All the RequestInfo
//   router.get("/", async (req, res) => {
//     try {
//       const RequestInfo = await RequestInfo.find();
//       res.json(RequestInfo);
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   //Property detail by id
//   router.get("/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const RequestInfo = await RequestInfo.findById(id);
//       res.json(RequestInfo);
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   // POST http://localhost:5005/api/RequestInfos
//   //Crear RequestInfo recibir los datos en req.body
//   router.post("/request", (req, res) => {
//     const { body } = req;

//     console.log(body);

//     RequestInfo.create(body)
//       .then((result) => {
//         res.json(result);
//       })
//       .catch(console.log);
//   });

//   // PUT http://localhost:5005/api/RequestInfos
//   // Edit the property after recibe the data on req.body
//   // receive the RequestInfo id in the params
//   router.put("/:id", (req, res) => {
//     const { body } = req;
//     const { id } = req.params;

//     console.log(body);

//     RequestInfo.findByIdAndUpdate(id, body)
//       .then((result) => {
//         res.json(result);
//       })
//       .catch(console.log);
//   });
