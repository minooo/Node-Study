const Koa = require('Koa')
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)
