"use strict";

const mongoose = require("mongoose");
// Desk schema
const deskSchema = new mongoose.Schema(
  {
    checkinClass: {
      code: String,
      description: String,
    },
    position: Number,
  },
  { _id: false }
);

// Row schema
const rowSchema = new mongoose.Schema(
  {
    position: String,
    desks: {
      desks: [deskSchema],
    },
  },
  { _id: false }
);

// Checkin Allocation Schema
const checkinAllocationSchema = new mongoose.Schema(
  {
    startTime: Date,
    endTime: Date,
    rows: {
      rows: [rowSchema],
    },
  },
  { _id: false }
);

const flightSchema = new mongoose.Schema(
  {
    lastUpdatedAt: {
      type: Date,
      required: true,
    },
    actualOffBlockTime: Date,
    aircraftRegistration: String,
    aircraftType: {
      iataMain: String,
      iataSub: String,
    },
    checkinAllocations: {
      checkinAllocations: [checkinAllocationSchema],
    },
    codeshares: {
      codeshares: [String],
    },
    expectedTimeBoarding: Date,
    expectedTimeGateClosing: Date,
    expectedTimeGateOpen: Date,
    expectedSecurityFilter: String,
    flightDirection: {
      type: String,
      required: true,
    },
    flightName: String,
    flightNumber: Number,
    gate: String,
    pier: String,
    isOperationalFlight: Boolean,
    mainFlight: String,
    prefixIATA: String,
    prefixICAO: String,
    airlineCode: Number,
    publicFlightState: {
      flightStates: [String],
    },
    route: {
      destinations: [String],
      eu: String,
      visa: Boolean,
    },
    scheduleDateTime: Date,
    scheduleDate: String,
    scheduleTime: String,
    serviceType: String,
    terminal: Number,
  },
  {
    collection: "flights",
    timestamps: true,
    strict: false,
  }
);
module.exports = mongoose.model("Flight", flightSchema);
