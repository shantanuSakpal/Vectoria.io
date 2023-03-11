const express = require("express")
const router = express.Router()
const  images = require("../models/PicSchema.js")

// Get All Element
router.get('/', function (req, res, next) {
    Element.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get One Element
router.get('/id/:id', function (req, res, next) {
    Element.findOne({id: req.params.id}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get Element By User
router.get('/user/:user', function (req, res, next) {
    Element.find({user: req.params.user}).then(function(element){
        res.send(element);
    }).catch(next);
});

// add a new Element 
router.post('/',function(req,res,next){
    console.log(req.body.user);
    Element.create(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

// update a Element
router.put('/:id',function(req,res,next){
    Element.findOneAndUpdate({id: req.params.id},req.body).then(function(element){
        Element.findOne({id: req.params.id}).then(function(element){
            res.send(element);
        });
    });
});

// delete a Element 
router.delete('/:id',function(req,res,next){
    Element.findOneAndDelete({id: req.params.id}).then(function(element){
        res.send(element);
    });
});

// delete all Element
router.delete('/',function(req,res,next){
    Element.deleteMany(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

module.exports = router