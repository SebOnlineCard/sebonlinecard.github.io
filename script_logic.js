function changeLanguageEN() {    
  var elementsEN = document.getElementsByClassName("box language--EN");
  for(var i = 0; i < elementsEN.length; i++) {
      elementsEN[i].style.display = 'inline'
  }
  var elementsDE = document.getElementsByClassName("box language--DE");
  for(var i = 0; i < elementsDE.length; i++) {
      elementsDE[i].style.display = 'none'
  }
}

function changeLanguageDE() {    
  var elementsEN = document.getElementsByClassName("box language--EN");
  for(var i = 0; i < elementsEN.length; i++) {
      elementsEN[i].style.display = 'none'
  }
  var elementsDE = document.getElementsByClassName("box language--DE");
  for(var i = 0; i < elementsDE.length; i++) {
      elementsDE[i].style.display = 'inline'
  }
}

changeLanguageEN();