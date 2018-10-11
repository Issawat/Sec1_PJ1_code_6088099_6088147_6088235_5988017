$(document).ready(function () {
    if (localStorage.getItem('ishct')) {
        $("#toggleHCT").css('color', 'yellow')
        for (let i = 1; i <= 30; i++)
            $(`#hctComponent${i}`).addClass('hct')
    }
    $("#toggleHCT").click(function () {
        if (localStorage.getItem('ishct')) {
            localStorage.setItem('ishct', '')
            $("#toggleHCT").css('color', 'white')
            for (let i = 1; i <= 30; i++)
                $(`#hctComponent${i}`).removeClass('hct')
        }
        else {
            localStorage.setItem('ishct', 'true')
            for (let i = 1; i <= 30; i++)
                $(`#hctComponent${i}`).addClass('hct')
            $("#toggleHCT").css('color', 'yellow')

        }
    });
});

function voice(num) {
    if (localStorage.getItem('isvoice') == 'true') {
        if (num == 1) {
            responsiveVoice.speak("Museum Information");
        }
        else if (num == 2) {
            responsiveVoice.speak("General Information");
        }
        else if (num == 3) {
            responsiveVoice.speak("Location, 1st Floor Research Institute for Languages and Cultures of Asia Mahidol University, Salaya Campus");
        }
        else if (num == 4) {
            responsiveVoice.speak("Office Hours, Monday to Friday, from 8.30 a.m. to 4.30 p.m.");
        }
        else if (num == 5) {
            responsiveVoice.speak("Museum Fee, Free for all");
        }
        else if (num == 6) {
            responsiveVoice.speak("iCulture Group Tel: 080-688-7675 or 0-2800-2308-14 ext. 3 4 0 5. For Public Relations office tel: 0-2800-2308-14 ext. 3 4 4 7 ");
        }
        else if (num == 7) {
            responsiveVoice.speak("E-mail r i l c a.mu@gmail.com or iculture408@gmail.com ");
        }
        else if (num == 8) {
            responsiveVoice.speak("Museum Location");
        }
        else if (num == 9) {
            responsiveVoice.speak("Scroll down for the details");
        }
        else if (num == 10) {
            responsiveVoice.speak("This is a Google maps");
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