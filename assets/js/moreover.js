
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
            responsiveVoice.speak("Know more about The History of The Museum.");
        }
        else if (num == 2) {
            responsiveVoice.speak("RILCA is not only doing a research, but also producing the graduate. RILCA has four languages and cultures postgraduate courses, there are Ph.D. and M.A. in Linguistics, Ph.D. in Multiculture Studies. RILCA also is to maintain the important traditions, it is to arrange many the activities. The Personnel of RILCA have been doing research about the Ethnic continuously for over 30 years and will definitely keep doing this for the benefits of humankind as the slogan Research and Developmental Institute for Languages, Cultures and Ethnic of Asia");
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
