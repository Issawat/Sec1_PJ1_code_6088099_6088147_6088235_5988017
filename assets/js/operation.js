$(document).ready(function () {
    if(localStorage.getItem('ishct')){
        $("#toggleHCT").css('color','yellow')
        for(let i = 1 ; i <= 30 ; i++)
        $(`#hctComponent${i}`).addClass('hct')
    }
    $("#toggleHCT").click(function () {
        if(localStorage.getItem('ishct')){
        localStorage.setItem('ishct','')
        $("#toggleHCT").css('color','white')
        for(let i = 1 ; i <= 30; i++)
        $(`#hctComponent${i}`).removeClass('hct')
        }
        else {
            localStorage.setItem('ishct','true')
            for(let i = 1 ; i <= 30 ; i++)
            $(`#hctComponent${i}`).addClass('hct')
            $("#toggleHCT").css('color','yellow')
            
        }
    });
});

    function voice(num) {
      if (localStorage.getItem('isvoice') == 'true') {
        if (num == 1) {
          responsiveVoice.speak("Exhibition, The museum exhibits academic progression of the Institution. ");
        }
        else if (num == 2) {
          responsiveVoice.speak("Interactive conversation, The museum is making a discussion through ethnic traditional villagesscape.");
        }
        else if (num == 3) {
          responsiveVoice.speak("Practicum Arena, The museum is used as practicum arena for all museum people.");
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
        responsiveVoice.speak('text to speech on. Operation of the museum.')
      }
    }