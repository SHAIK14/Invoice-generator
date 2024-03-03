const Invoice = require("../models/Invoice");

exports.createInvoice = async (req, res) => {
  try {
    const { products, totalProductsCost, gst, grandTotal, validUntil } =
      req.body;

    const newInvoice = new Invoice({
      products,
      totalProductsCost,
      gst,
      grandTotal,
      validUntil,
    });

    await newInvoice.save();

    res.status(201).json({
      message: "Invoice created successfully",
      invoice: newInvoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
