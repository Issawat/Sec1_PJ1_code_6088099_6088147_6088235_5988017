$(document).ready(function () {
    if(localStorage.getItem('ishct')){
        $("#toggleHCT").css('color','yellow')
        for(let i = 1 ; i <= 21 ; i++)
        $(`#hctComponent${i}`).addClass('hct')
    }
    $("#toggleHCT").click(function () {
        if(localStorage.getItem('ishct')){
        localStorage.setItem('ishct','')
        $("#toggleHCT").css('color','white')
        for(let i = 1 ; i <= 21 ; i++)
        $(`#hctComponent${i}`).removeClass('hct')
        }
        else {
            localStorage.setItem('ishct','true')
            for(let i = 1 ; i <= 21 ; i++)
            $(`#hctComponent${i}`).addClass('hct')
            $("#toggleHCT").css('color','yellow')
            
        }
    });
});