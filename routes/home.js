const route = require('koa-router')
const router = new route()
router.get('/', (ctx, next) => {
    next()
})

module.exports = router