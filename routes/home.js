const route = require('koa-router')
const router = new route()
const article = require('../models/index')

router.all('article', async (ctx, next) => {
    if (ctx.request.method === 'OPTIONS') {
        ctx.status = 200
        ctx.set('Access-Control-Allow-Origin','*')
        ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    }
    await next()
})

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
        const id = decodeURI(ctx.params.date)
        let res = await article.getArticle(id)
        ctx.set('Access-Control-Allow-Origin','*')
        ctx.body = res
    } catch (error) {
        ctx.body = `erro:${error}`
    }
})

router.post('article', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin','*')
    try {
        const {title, author, content, introduction} = ctx.request.body
        ctx.body = await article.addArticle({title, author, content, introduction})
    } catch (error) {
        ctx.body = `erro:${error}`
    }
})

module.exports = router