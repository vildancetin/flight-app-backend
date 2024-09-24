"use strict";

const Flight = require("../models/flight.model");

module.exports = {
  list: async (req, res) => {
    const data = await Flight.find();
    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    const flightData = req.body;
    if (flightData.flightDirection === "D") {
      if (!flightData.checkinAllocations) {
        return res.status(400).send({
          error: true,
          message: "checkinAllocations is required for departure flights",
        });
      }
    } else {
      delete flightData.checkinAllocations;
    }

    const data = await Flight.create(flightData);
    res.status(201).send({
      error: false,
      body: flightData,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Flight.find({ _id: req.params.flightId });
    res.status(202).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Flight.updateOne({ _id: req.params.flightId }, req.body);
    const newData = await Flight.find({ _id: req.params.flightId });
    res.status(202).send({
      error: false,
      body: req.body,
      data,
      newData,
    });
  },
  delete: async (req, res) => {
    const data = await Flight.deleteOne({ _id: req.params.flightId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
