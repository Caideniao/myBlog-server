const route = require('koa-router')
const home = require('./home.js')
const about = require('./about.js')
const archive = require('./archive.js')
const portfolio = require('./portfolio.js')

const router = new route()

router.get('/test', async (ctx, next) => {
    ctx.body = 'rrrr'
})

module.exports = router