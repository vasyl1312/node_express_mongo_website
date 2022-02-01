const {Router}  = require('express')
const router =  Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Home Page', isIndex: true})
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create Page', isCreate: true})
})

module.exports = router