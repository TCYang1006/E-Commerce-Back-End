const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then(Category => {
    res.json(Category);
  });
});

router.get('/api/category/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include:
      [Product]
  }).then((Category) => {
    res.json(Category);
  });
});

router.post('/api/category', (req, res) => {
  // create a new category
  Category.create({
    where: {
      id: req.body.id,
      category_name: req.body.category_name
    }
  }).then(Category => {
    res.json(Category);
  });
});

router.put('/api/category/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

router.delete('/api/category/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
