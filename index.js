function collapse(id) {
  var elem = document.getElementById('description-'+id);
  var isShown = true;
  for(var i = 0; i < elem.classList.length; i++) {
    if(elem.classList[i] == 'collapse') {
      isShown = false;
    }
  }
  if(isShown) {
    elem.classList.add('collapse');
  } else {
    elem.classList.remove('collapse');
  }
}
