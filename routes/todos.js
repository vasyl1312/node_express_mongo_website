const {Router}  = require('express')
const router =  Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'})
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create Page'})
})

module.exports = router