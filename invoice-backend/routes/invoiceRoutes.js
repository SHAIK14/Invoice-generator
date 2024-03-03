const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.post("/invoices", invoiceController.createInvoice);

router.get("/invoices", invoiceController.getAllInvoices);

module.exports = router;
