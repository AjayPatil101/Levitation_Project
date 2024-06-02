const { generatePDF } = require('../Utils/pdfGenerator');
const Product = require('../models/product');
const User = require('../models/User');

exports.createPDF = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id });
    const user = await User.findById(req.user._id);
    const date = new Date().toLocaleDateString();

    const pdf = await generatePDF(products, user, date);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
    res.send(pdf);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
