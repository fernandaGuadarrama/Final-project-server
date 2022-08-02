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
      const alumno = await Properties.findById(id);
      res.json(properties);
    } catch (err) {
      console.log(err);
    }
  });

  // POST http://localhost:5005/api/alumnos
  //Crear alumno recibir los datos en req.body
  router.post("/", (req, res) => {
    const { body } = req;

    console.log(body);

    Properties.create(body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  // PUT http://localhost:5005/api/alumnos
  // Edit the property after recibe the data on req.body
  // receive the properties id in the params
  router.put("/:id", (req, res) => {
    const { body } = req;
    const { id } = req.params;

    console.log(body);

    Alumno.findByIdAndUpdate(id, body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });

  module.exports = router;