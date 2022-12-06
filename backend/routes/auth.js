const express = require('express');
const router = express.Router(); 

router.get('/', (req, res)=>{
    obj = {
        a : 'abcd',
        num : 2222 
    }
    res.json(obj);
})

module.exports = router;