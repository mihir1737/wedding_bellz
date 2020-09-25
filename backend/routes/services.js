const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('I am services')
})
router.route('/').post((req,res)=>{
    console.log('service post')
    res.send('request accepted at services.')
})

module.exports = router;