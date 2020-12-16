const router = require('express').Router();

router.route('/')
    // get all customers 
    .get(function(req, res, next) {
        res.send('Getting all customers...')
    })
    // create a new customer
    .post(function(req, res, next) {
        res.send("Creating customer...")
    })

router.route('/:customerID')
    // get a customer
     .get(function(req, res, next) {
        res.send('Getting customer ' + req.params.customerID + '...')
     })
     // update a custumer
     .put(function(req, res, next) {
         res.send('Updating customer ' + req.params.customerID + '...')
     })
     // delete a customer
     .delete(function(req, res, next) {
         res.send('Deleting customer ' + req.params.customerID + '...')
     })

router.route('/:customerID/orders')
     // get all orders belonging to a customer
     .get(function(req, res, next) {
        res.send('Getting all orders for ' + req.params.customerID + '....')
     })
     // create an order for a customer
     // similar route in orders.js
     .post(function(req, res, next) {
         res.send('Creating order for ' + req.params.customerID + '....')
     })


module.exports = router;