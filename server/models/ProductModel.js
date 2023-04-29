const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, require },
        price: { type: Number, require },
        oldPrice: { type: Number, require },
        hasDiscount: { type: Boolean, require },
        features: { type: String, require },
        description: { type: String, require },
        category: { type: String, require },
        tags: { type: String, require },
        img: { type: String },
      },
      {
        timestamps: true,
      }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;