const route = require('koa-router')
const router = new route()
router.get('/portfolio', (ctx, next) => {
    ctx.body = '你好啊,koa真好用'
})

module.exports = router