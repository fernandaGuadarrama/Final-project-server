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

  // POST http://localhost:5005/api/properties/Addform
  //Crear properties recibir los datos en req.body
  router.post("/Addform", (req, res) => {
    const { body } = req;

    console.log(body);

    Properties.create(body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  // PUT 
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

    ///update
  router.put("/:id", (req, res) => {
    const { body } = req;
    const { id } = req.params;

    console.log(body);

    Properties.findByIdAndUpdate(id, body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  ///delete
  router.delete('/delete/:id', (req, res) =>{
    const { id } = req.params;
    Properties.findByIdAndUpdate(id)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
  });
  module.exports = router;

