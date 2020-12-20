const router = require('express').Router();

router.route('/')
    // get all products
    .get(function(req, res, next) {
        res.send('Getting all products...')
    })
    // create a product
    .post(function(req, res, next) {
        res.send("Creating product...")
    })

router.route('/count')
    // get number of products
    .get(function(req, res, next) {
        res.send('Getting total number of products...')
    })

router.route('/:productID')
    // get a product
    .get(function(req, res, next) {
        res.send('Getting product ' + req.params.productID + '...')
    })
    // update a product
    .put(function(req, res, next) {
        res.send('Updating ' + req.params.productID + '...')
    })
    // delete a product
    .put(function(req, res, next) {
        res.send('Deleting ' + req.params.productID + '...')
    })

module.exports = router;