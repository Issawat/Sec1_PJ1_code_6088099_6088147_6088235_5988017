 
    $(document).ready(function () {
        if(localStorage.getItem('ishct')){
            $("#toggleHCT").css('color','yellow')
            for(let i = 1 ; i <= 17 ; i++)
            $(`#hctComponent${i}`).addClass('hct')
        }
        $("#toggleHCT").click(function () {
            if(localStorage.getItem('ishct')){
            localStorage.setItem('ishct','')
            $("#toggleHCT").css('color','white')
            for(let i = 1 ; i <= 17 ; i++)
            $(`#hctComponent${i}`).removeClass('hct')
            }
            else {
                localStorage.setItem('ishct','true')
                for(let i = 1 ; i <= 17 ; i++)
                $(`#hctComponent${i}`).addClass('hct')
                $("#toggleHCT").css('color','yellow')
                
            }
        });
    });

function voice(num) {
if (localStorage.getItem('isvoice') == 'true') {
if (num == 1) {
  responsiveVoice.speak("Go deeper into the philosophy");
}
else if (num == 2) {
  responsiveVoice.speak("The philosophy of RILCA is languages and Cultures are the heart of sustainable development Therefore, the main task of RILCA is to support research toward diversity of languages and cultures and also promote the positive communication outcomes in Southeast Asia. The research findings of each studies are advantage to many parts of society both nationally and internationally such as eduction and social development.");
}
else if (num == 3) {
  responsiveVoice.speak("Scroll down for the details");
}
}
}
function largeText() {
document.getElementById('nav').classList.add('text-lg')
}
function setVoice() {
if (localStorage.getItem('isvoice')) {
localStorage.setItem('isvoice', '')
document.getElementById('toggleTTS').style.color = 'white'
var context = new AudioContext()
var o = context.createOscillator()
o.frequency.value = 350
var g = context.createGain()
o.connect(g)
g.connect(context.destination)
o.start(0)
g.gain.exponentialRampToValueAtTime(
  0.00001, context.currentTime + 3
)
responsiveVoice.speak('text to speech off')
}
else {
localStorage.setItem('isvoice', 'true')
document.getElementById('toggleTTS').style.color = 'red'
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
o.connect(g)
g.connect(context.destination)
o.start(0)
g.gain.exponentialRampToValueAtTime(
  0.00001, context.currentTime + 3
)
responsiveVoice.speak('text to speech on')
}
}