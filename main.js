const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=> {
  const width = window.screen.width;
  const height = window.screen.height;
  const innerWidth =  window.innerWidth ;
  const innerHeight =  window.innerHeight;
  const result = `Размер экрана: ${width} x ${height}`;
  const resultScroll = `Размер экрана без учета полосы прокрутки: ${innerWidth} x ${innerHeight}`;
  alert(result);
  alert(resultScroll)
})
