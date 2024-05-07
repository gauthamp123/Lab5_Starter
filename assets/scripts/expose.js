// expose.js

window.addEventListener('DOMContentLoaded', init);

function selectHorn(){
  let choice = document.getElementById('horn-select');
  const img = new Image();

  if (choice == 'air-horn'){
    img.src = "assets/images/air-horn.svg"
  }
  
}

function init() {
  selectHorn();
}