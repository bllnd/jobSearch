function registerClickHandler() {
  $('#clickme').click(function() {
    var value = this.innerHTML
    setTimeout(function() {
      alert(value);
    }, 200);
  });
}