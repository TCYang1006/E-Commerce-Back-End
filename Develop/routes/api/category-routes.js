const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Post.findAll({}).then(dbCategories => {
    res.json(dbCategories);
  })

});

router.get('/api/category/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Post.findAll({
    where: {
      id: req.params.id
    }
  }).then((dbCategories) => res.json(dbCategories))
});

router.post('/api/category', (req, res) => {
  // create a new category
  Post.create({
    where: {
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }
  }).then(dbCategories => res.json(dbCategories))
});

router.put('/api/category/:id', (req, res) => {
  // update a category by its `id` value
  Post.update({
    where: {
      id: req.params.id
    }
  }).then(dbCategories => res.json(dbCategories))
});

router.delete('/api/category/:id', (req, res) => {
  // delete a category by its `id` value
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategories => res.json(dbCategories))

});

module.exports = router;
