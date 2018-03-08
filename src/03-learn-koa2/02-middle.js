const Koa = require('koa')
const http = require("http")
const https = require("https")
const app = new Koa()

app.context.db = "minooo"
app.on('error', err => {
  console.error('server error haha', err)
})
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  // ctx.throw(400, '400lala')
  // ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  // console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
  ctx.is('application/json')
  // console.log(ctx.ip, ctx.request.host, ctx.request.hostname, ctx.request.ip)
});

// app.listen(3000);
http.createServer(app.callback()).listen(3000)
https.createServer(app.callback()).listen(3001)
// 学到这了
// https://koa.bootcss.com/
