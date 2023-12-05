const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')


const message = new SpeechSynthesisUtterance();

let voices = []

function getVoices(){
  voices = speechSynthesis.getVoices();

  voices.forEach(voice =>{
    const option = document.createElement("option")
    option.value = voice.name
    option.innerHTML = `${voice.name} ${voice.lang}`

    voicesSelect.appendChild(option)
  })
}

// set text message
function setTextMessage(text) {
  message.text = text;
}

function speechText() {
  speechSynthesis.speak(message)
}

function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value)
}

speechSynthesis.addEventListener('voiceschanged', getVoices)

voicesSelect.addEventListener('change', setVoice)


readBtn.addEventListener('click', ()=>{
  setTextMessage(textarea.value)
  speechText();
})

getVoices();