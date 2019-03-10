const route = require('koa-router')
const home = require('./home.js')
const about = require('./about.js')
const archive = require('./archive.js')
const portfolio = require('./portfolio.js')

const router = new route()

router.use('/', home.routes())
router.use('/about', about.routes())
router.use('/archive', archive.routes())
router.use('/portfolio', portfolio.routes())

module.exports = router