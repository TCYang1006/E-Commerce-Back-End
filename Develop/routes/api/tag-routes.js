const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  }).then(Tag =>{
    res.json(Tag);
  })
});

router.get('/api/tag/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(Tag =>{
    res.json(Tag);
  })
});

router.post('/api/tag', (req, res) => {
  // create a new tag
  Tag.create({
    where: {
      id: req.body.id,
      tag_name: req.body.tag_name
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

router.put('/api/tag/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

router.delete('/api/tag/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

module.exports = router;
