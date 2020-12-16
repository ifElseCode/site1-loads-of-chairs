const router = require('express').Router();

router.route('/')
    // get all orders
    // ?status query param limits order with a given status, 
    //  or 'any' for all orders regardless of status  
    .get(function(req, res, next) {
        let status = req.query.status
        if (status === undefined) {status = 'any' }
        res.send('Getting all orders with given status: ' + status + '...')
    })
    // create an order
    .post(function(req, res, next) {
        res.send("Creating an order...")
    })

router.route('/count')
    // get number of orders
    // ?status query param limits order with a given status, 
    //  or 'any' for all orders regardless of status  
    .get(function(req, res, next) {
        let status = req.query.status
        if (status === undefined) {status = 'any' }
        res.send('Getting number of orders with given status: ' + status + '...')
    })

router.route('/:orderID')
    // get a order
    .get(function(req, res, next) {
        res.send('Getting order ' + req.params.orderID + '...')
    })
    // update a order
    .put(function(req, res, next) {
        res.send('Updating ' + req.params.orderID + '...')
    })
    // delete a order
    .delete(function(req, res, next) {
        res.send('Deleting ' + req.params.orderID + '...')
    })

router.route('/:orderID/products')
    // get all products in an order
    .get(function(req, res, next) {
        res.send('Getting all products in order number ' + req.params.orderID + '...')
    })

router.route('/:orderID/products/count')
    // get number of products in an order
    .get(function(req, res, next) {
        res.send('Getting number of products in order number ' + req.params.orderID + '...')
    })


module.exports = router;
