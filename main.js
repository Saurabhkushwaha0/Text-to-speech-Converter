// let btn = document.querySelector('.speak_btn'); 
//        btn.onclick = () => {
//      let txt = document.querySelector('.enter_text').value;
//      let speech = new SpeechSynthesisUtterance();
//      speech.lang = 'en-US';
//      speech.text = txt;
//      speech.rate = 1;
//      speech.volume = 1;
//      speech.pitch = 1;

//      speechSynthesis.speak(speech);
//      alert('btn click');

// }

function btn_speak()
{
     let txt = document.getElementById('enter_text').value;
     // let txt = document.querySelector('.enter_text').value;
     let speech = new SpeechSynthesisUtterance();
     speech.lang = 'en-US';
     speech.text = txt;
     speech.rate = 1;
     speech.volume = 1;
     speech.pitch = 1;

     speechSynthesis.speak(speech);
     // alert('btn click');
}

// hello Saurabh how are you i think you are good you ae great person saurbh i like u i think i m loving with you