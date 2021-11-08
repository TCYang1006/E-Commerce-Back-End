const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [dbProduct]
  }).then(dbTags =>{
    res.json(dbTags);
  })
});

router.get('/api/tag/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [dbProduct]
  }).then(dbTags =>{
    res.json(dbTags);
  })
});

router.post('/api/tag', (req, res) => {
  // create a new tag
  Tag.create({
    where: {
      id: req.body.id,
      tag_name: req.body.tag_name
    }
  }).then(dbTags => {
    res.json(dbTags);
  });
});

router.put('/api/tag/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    }
  }).then(dbTags => {
    res.json(dbTags);
  });
});

router.delete('/api/tag/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTags => {
    res.json(dbTags);
  });
});

module.exports = router;
