var match = location.pathname.match(/^\/(\S+)\.php$/);
if(match) {
  var cssElm = document.createElement('link');
  cssElm.rel = 'stylesheet';
  cssElm.type = 'text/css';
  cssElm.href = 'https://watceedee.github.io/gazelle/css/enhancer-' + match[1] + '.css?' + Date.now();
  document.head.appendChild(cssElm);
}
