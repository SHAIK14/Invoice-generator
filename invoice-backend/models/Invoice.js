const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  rate: Number,
  total: Number,
});

const invoiceSchema = new mongoose.Schema({
  products: [productSchema],
  totalProductsCost: Number,
  gst: Number,
  grandTotal: Number,
  validUntil: Date,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
