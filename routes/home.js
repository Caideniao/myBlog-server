const route = require('koa-router')
const router = new route()
const article = require('../models/index')

router.get('article', async (ctx, next) => {
    try {
        let res = await article.getArticle()
        ctx.body = res
    } catch (error) {
        ctx.body = 'erro'
    }
})

router.get()

module.exports = router