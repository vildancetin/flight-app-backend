"use strict";

const router = require("express").Router();
const Flight = require("../controllers/flight.controller");

router.route("/").get(Flight.list).post(Flight.create);

router
  .route("/:flightId")
  .get(Flight.read)
  .put(Flight.update) // put patch aynı
  .patch(Flight.update)
  .delete(Flight.delete);

  module.exports=router