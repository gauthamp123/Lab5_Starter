// expose.js

window.addEventListener('DOMContentLoaded', init);


document.getElementById('horn-select').addEventListener('change', function() {
  const horn = this.value;
  const img = new Image();
    
  switch(horn) {
    case 'air-horn':
      img.src = 'assets/images/air-horn.svg';
      img.addEventListener('load', function() {
        document.getElementsByTagName('img')[0].src = img.src;
      });
      document.getElementsByClassName('hidden')[0].src = 'assets/audio/air-horn.mp3';
      document.getElementsByClassName('hidden')[0].load();
      break;
    case 'car-horn':
      img.src = 'assets/images/car-horn.svg';
      img.addEventListener('load', function() {
        document.getElementsByTagName('img')[0].src = img.src;
      });
      document.getElementsByClassName('hidden')[0].src = 'assets/audio/car-horn.mp3';
      document.getElementsByClassName('hidden')[0].load();
      break;
    case 'party-horn':
      img.src = 'assets/images/party-horn.svg';
      img.addEventListener('load', function() {
        document.getElementsByTagName('img')[0].src = img.src;
      });
      document.getElementsByClassName('hidden')[0].src = 'assets/audio/party-horn.mp3';
      document.getElementsByClassName('hidden')[0].load();
      break;
    default:
      console.log('Unknown option selected');
  }
});

var page_volume = document.createElement("audio");
document.getElementById('volume-controls').addEventListener('change', function(){
  let slider = document.getElementById('volume');
  var volume = slider.value;
  page_volume.volume = volume/100;

  const img = new Image();
  if (volume == 0){
    img.src = 'assets/icons/volume-level-0.svg';
    img.addEventListener('load', function() {
        document.getElementsByTagName('img')[1].src = img.src;
    });
  }
  else if (volume > 0 && volume < 33){
    img.src = 'assets/icons/volume-level-1.svg';
    img.addEventListener('load', function() {
        document.getElementsByTagName('img')[1].src = img.src;
    });
  }
  else if (volume >= 33 && volume < 67){
    img.src = 'assets/icons/volume-level-2.svg';
    img.addEventListener('load', function() {
        document.getElementsByTagName('img')[1].src = img.src;
    });
  }
  else{
    img.src = 'assets/icons/volume-level-3.svg';
    img.addEventListener('load', function() {
        document.getElementsByTagName('img')[1].src = img.src;
    });
  }
  
});

var click = document.querySelector('button');
click.addEventListener("click", (event) => {
  let horn = document.getElementById('horn-select').value;
  console.log(page_volume.volume);
  if (horn == 'party-horn'){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  document.getElementsByClassName('hidden')[0].play();
});



function init() {
  
}