const { 
    createData, 
    readData, 
    updateData, 
    deleteData 
} = require('../controllers/bootcamp-controllers');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .put(updateData)
    .delete(deleteData);

module.exports = router;