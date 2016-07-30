function registerHandlers() {
  var links = document.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = generateHandler(i);
  }

  function generateHandler(index) {
    return function() {
      alert(index);
      return false;
    }
  }
}


/* HTML code for testing purposes (do not submit uncommented):
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Test page</title>
    </head>
    <body>
      In my life, I used the following web search engines:<br/>
      <a href="//www.yahoo.com">Yahoo!</a><br/>
      <a href="//www.altavista.com">AltaVista</a><br/>
      <a href="//www.google.com">Google</a><br/>
    </body>
  </html>
*/