const btnNote = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const btnFullScreen = document.querySelector('.fullscreen')
const piano = document.querySelector('.piano')
const pianoKey = document.querySelectorAll('.piano-key')
const pianoKeySharp = document.querySelectorAll('.sharp')

document.addEventListener('keydown',(event) => {
  const key = document.querySelector(`.piano [data-kod="${event.keyCode}"]`);
  if (key !== null && !key.classList.contains('piano-key-active')){
    key.classList.add('piano-key-active');
    if (event.repeat === false){audio(event)}
  }
});

document.addEventListener('keyup',(event) => {
  const key = document.querySelector(`.piano [data-kod="${event.keyCode}"]`);
  if (key !== null/*  && !key.classList.contains('piano-key-active') */){
    key.classList.remove('piano-key-active');
  }
});

//audio
const audio = (event) => {
  let audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  if (audio === null){
    audio = document.querySelector(`audio[data-key='${event.target.dataset.kod}']`)
  }
  if (!audio ) return;
    audio.currentTime = 0;
    audio.play();
}

//mouse Events
const activeKey = (event) => {
  if (!event.target.classList.contains('piano-key-active')){
  audio(event)
  event.target.classList.add('piano-key-active');
  event.target.classList.add('piano-key-active-pseudo');
}
}

const activeKeyOff = (event) =>{
  event.target.classList.remove('piano-key-active');
  event.target.classList.remove('piano-key-active-pseudo');

}

const mouseDetect = (event) => {
  if (event.target.classList.contains('piano-key') && 
  !event.target.classList.contains('piano-key-active')
  ){
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');

  audio(event)
  }
  pianoKey.forEach(elem => {
    elem.addEventListener('mouseover', activeKey);
    elem.addEventListener('mouseout', activeKeyOff);
  });
}

const mouseDetectOff = (event) => {
  event.target.classList.remove('piano-key-active')
  event.target.classList.remove('piano-key-active-pseudo');

  pianoKey.forEach(elem => {
    elem.removeEventListener('mouseover', activeKey);
    elem.removeEventListener('mouseout', activeKeyOff);
  });
}

piano.addEventListener('mousedown',mouseDetect/* , false */);
document.addEventListener('mouseup',mouseDetectOff);
   
function fullScreen() {
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else{
    document.documentElement.requestFullscreen().catch(console.log)
  }
}

btnFullScreen.addEventListener('click', () => {
  fullScreen();
});

btnNote.addEventListener('click', () => {
  btnNote.classList.add('btn-active');
  btnLetters.classList.remove('btn-active');
  pianoKey.forEach(elem => elem.classList.remove('piano-key-letter'));
});

btnLetters.addEventListener('click', () => {
  btnNote.classList.remove('btn-active');
  btnLetters.classList.add('btn-active');
  pianoKey.forEach(elem => elem.classList.add('piano-key-letter'));
});