const mongoose = require("mongoose");
const { Schema } = mongoose;

const filterRenewalSchema = new Schema({
  clientId: { type: Number, required: true },
  renewalDate: { type: Date, required: true },
});

const FilterRenewal = mongoose.model("FilterRenewal", filterRenewalSchema);

module.exports = FilterRenewal;
