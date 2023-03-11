const express = require("express")
const router = express.Router()
const  ImageSchema = require("../models/PicSchema.js")

// Get All ImageSchema
router.get('/', function (req, res, next) {
    ImageSchema.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get One ImageSchema
router.get('/id/:id', function (req, res, next) {
    ImageSchema.findOne({id: req.params.id}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get ImageSchema By User
router.get('/user/:user', function (req, res, next) {
    ImageSchema.find({user: req.params.user}).then(function(element){
        res.send(element);
    }).catch(next);
});

// add a new ImageSchema 
router.post('/',function(req,res,next){
    console.log(req.body.id);
    ImageSchema.create(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

// update a ImageSchema
router.put('/:id',function(req,res,next){
    ImageSchema.findOneAndUpdate({id: req.params.id},req.body).then(function(element){
        ImageSchema.findOne({id: req.params.id}).then(function(element){
            res.send(element);
        });
    });
});

// delete a ImageSchema 
router.delete('/:id',function(req,res,next){
    ImageSchema.findOneAndDelete({id: req.params.id}).then(function(element){
        res.send(element);
    });
});

// delete all ImageSchema
router.delete('/',function(req,res,next){
    ImageSchema.deleteMany(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

module.exports = router