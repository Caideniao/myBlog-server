const koa = require('koa')
const static = require('koa-static')
const router = require('./routes/index')
const app = new koa()

const test = require('./models/index')

app.use(static('./dist'))
app.use(router.routes())
app.listen(3000)

test.getArticle(1)