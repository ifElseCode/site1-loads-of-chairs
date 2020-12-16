const router = require('express').Router();

router.route('/')
    // get all categories
    .get(function(req, res, next) {
        res.send('Getting all categories...')
    })
    // create a category
    .post(function(req, res, next) {
        res.send("Creating category...")
    })

router.route('/count')
    // get number of categories
    .get(function(req, res, next) {
        res.send('Getting number of categories...')
    })

router.route('/:categoryID')
    // get a category
    .get(function(req, res, next) {
        res.send('Getting category ' + req.params.categoryID + '...')
    })
    // update a category
    .put(function(req, res, next) {
        res.send('Updating ' + req.params.categoryID + '...')
    })
    // delete a category
    .delete(function(req, res, next) {
        res.send('Deleting ' + req.params.categoryID + '...')
    })

router.route('/:categoryID/products')
    // get all products in a category
    .get(function(req, res, next) {
        res.send('Getting all products in category ' + req.params.categoryID + '...')
    })

router.route('/:categoryID/products/count')
    // get number of products in a category
    .get(function(req, res, next) {
        res.send('Getting number of products in category ' + req.params.categoryID + '...')
    })


module.exports = router;
