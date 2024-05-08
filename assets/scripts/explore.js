// explore.js
window.addEventListener('DOMContentLoaded', init);
function init() {
const voiceSelect = document.getElementById('voice-select');
const textArea = document.getElementById('text-to-speak');
const speakButton = document.getElementById('explore').querySelector('button');
const faceImage = document.querySelector('#explore img');
const synth = window.speechSynthesis;
let voices = [];
const populateVoiceList = () => {
  voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.setAttribute('value', voices[i].name);
    voiceSelect.appendChild(option);
  }
};
// Event listener to repopulate voices if they load late
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
const speak = () => {
  if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
  }
  if (textArea.value !== '') {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
    utterance.onerror = (event) => {
      console.error('SpeechSynthesisUtterance.onerror');
    };
    utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
    synth.speak(utterance);
  }
};
// Add event listener to the button
speakButton.addEventListener('click', speak);
populateVoiceList();
}