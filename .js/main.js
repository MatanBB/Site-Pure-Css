let gId
function onNavClick(id) {
  if(gId&&gId===id) {
    return document.getElementById(gId).classList.toggle('focus')
  }
  if (gId) document.getElementById(gId).classList.remove('focus')
  gId = id
  document.getElementById(id).classList.add('focus')
}

