const { Category } = require('../model/Category')

exports.fetchCategories = async (req , res) => {
    
    try {
        const category = await Category.find({})
        res.status(200).json(category)
    } catch(err) {
        res.status(400).json(err)
    }
}

exports.createCategory = async (req, res) => {
    // this product we have to get from API body
    const category = new Category(req.body);
    try {
      const doc = await category.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };