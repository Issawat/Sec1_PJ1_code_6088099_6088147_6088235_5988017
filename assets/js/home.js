$(document).ready(function () {
    if(localStorage.getItem('ishct')){
        $("#buttonset").css('color','yellow')
        for(let i = 1 ; i <= 10 ; i++)
        $(`#hctComponent${i}`).addClass('hct')
    }
    $("#buttonset").click(function () {
        if(localStorage.getItem('ishct')){
        localStorage.setItem('ishct','')
        $("#buttonset").css('color','white')
        for(let i = 1 ; i <= 10 ; i++)
        $(`#hctComponent${i}`).removeClass('hct')
        }
        else {
            localStorage.setItem('ishct','true')
            for(let i = 1 ; i <= 10 ; i++)
            $(`#hctComponent${i}`).addClass('hct')
            $("#buttonset").css('color','yellow')
            
        }
    });
});
async function hoverMenuImage(data) {
    let backgroundImage = document.getElementById('background')
    switch (data) {
        case 1: {
            backgroundImage.src = "assets/images/home2.JPG"
            backgroundImage.className = await 'fixed-background fade-effect'
            if (localStorage.getItem('isvoice')) {
                responsiveVoice.speak("click to explore museum history");
            }
        }; break;
        case 2: {
            backgroundImage.src = "assets/images/home3.JPG"
            backgroundImage.className = await 'fixed-background fade-effect'
            if (localStorage.getItem('isvoice')) {
                responsiveVoice.speak("click to explore museum operation");
            }
        }; break;
        case 3: {
            backgroundImage.src = "assets/images/home5.JPG"
            backgroundImage.className = await 'fixed-background fade-effect'
            if (localStorage.getItem('isvoice')) {
                responsiveVoice.speak("click to explore museum information");
            }
        }; break;
        case 4: {
            backgroundImage.src = "assets/images/home4.JPG"
            backgroundImage.className = await 'fixed-background fade-effect'
            if (localStorage.getItem('isvoice')) {
                responsiveVoice.speak("click to visit museum web gallery");
            }
        }; break;
    }
}
async function mouseOutImage() {
    let backgroundImage = await document.getElementById('background')
    backgroundImage.src = await "assets/images/home1.JPG"
    backgroundImage.className = await 'fixed-background fade-effect-out'
}

function voice(num) {
    if (localStorage.getItem('isvoice')) {
        if (num == 1) {
            responsiveVoice.speak("Welcome to ANTHROPOLOGICAL CULTURE MUSEUM, Research Institute for Languages and Cultures of Asia, Mahidol University");
        }
    }
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
            0.00001, context.currentTime + 2
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
            0.00001, context.currentTime + 2
        )
        responsiveVoice.speak('text to speech on')
    }
}