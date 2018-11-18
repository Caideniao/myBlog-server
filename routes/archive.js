const route = require('koa-router')
const router = new route()
router.get('/archive', (ctx, next) => {
    ctx.body = '博客档案'
})

module.exports = router