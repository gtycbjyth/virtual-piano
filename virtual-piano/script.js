const btnNote = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const btnFullScreen = document.querySelector('.fullscreen')
const piano = document.querySelector('.piano')
const pianoKey = document.querySelectorAll('.piano-key')
const pianoKeySharp = document.querySelectorAll('.sharp')

const mouseOver = (event) => {
  event.target.classList.add('piano-key-active');
}

const mouseOut = (event) =>{
  event.target.classList.remove('piano-key-active')
}

const mouseDetect = (event) => {
  if (event.target.classList.contains('piano-key')){
    event.target.classList.add('piano-key-active');
  }
  pianoKey.forEach(elem => {
    elem.addEventListener('mouseover', mouseOver);
    elem.addEventListener('mouseout', mouseOut);
  });
}

const mouseDetectOff = (event) => {
  event.target.classList.remove('piano-key-active')
  pianoKey.forEach(elem => {
    elem.removeEventListener('mouseover', mouseOver);
    elem.removeEventListener('mouseout', mouseOut);
  });
}

piano.addEventListener('mousedown',mouseDetect/* , false */);
document.addEventListener('mouseup',mouseDetectOff);
   
///////////////////////////////////////////////////////////
// pianoKey.forEach(elem => {
//     elem.addEventListener('mousedown', ()=>{
//         elem.classList.add('piano-key-active')
//       });
//       elem.addEventListener('mouseup', ()=>{
//           elem.classList.remove('piano-key-active')
//         });
//       });



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