const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
//   ctx.body = 'Hello Koa';
  const url = ctx.URL.pathname;
  if(url == "/"){
    ctx.body = '<h1>Index sayfasina hosgeldiniz</h1>';
  }else if(url == "/hakkimda"){
    ctx.body = '<h1>Hakkimda sayfasina hosgeldiniz</h1>';
  }else if(url =="/iletisim"){
    ctx.body = '<h1>Iletisim sayfasina hosgeldiniz</h1>';
  }
});

app.listen(3000);