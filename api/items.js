const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

// Item model
const Item = require('../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().
        then(item => res.json(item)).
        catch(err => console.log(err));
})

router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id).
        then(item => item.remove()
            .then(() => res.json({message: "Success"}))).
        catch(err => res.status(404).json({message: "Fail", error: err}))
});

router.put('/:id', (req, res) => {
    Item.findById(req.params.id).
        then(item => item.update())
})

module.exports = router;