const route = require('koa-router')
const router = new route()
const article = require('../models/index')

router.get('article', async (ctx, next) => {
    try {
        const page = ctx.query.page || 1
        const res = await article.getArticleList(page)
        ctx.set('Access-Control-Allow-Origin','*')
        ctx.body = res
    } catch (error) {
        ctx.body = `erro:${error}`
    }
})

router.get('article/:date', async (ctx, next) => {
    try {
        const id = ctx.query.id
        let res = await article.getArticle(id)
        ctx.set('Access-Control-Allow-Origin','*')
        ctx.body = res
    } catch (error) {
        ctx.body = `erro:${error}`
    }
})

module.exports = router