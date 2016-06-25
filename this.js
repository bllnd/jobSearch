function registerClickHandler() {
  $('#clickme').click(function(e) {
    setTimeout(function() {
      alert(e.currentTarget.innerHTML);
    }, 200);
  });
}