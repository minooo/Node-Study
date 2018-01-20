const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  const start = Date.now();
  await next()
  const ms = Date.now() - start;
  ctx.set('X-Response-Time123', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = Date.now();
  await next()
  const ms = Date.now() - start;
  console.log(ctx)
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

app.use(async ctx => {
  ctx.body = 'Hello Body'
})

app.listen(3000, (err) => {
  if (!err) console.log('success')
})
