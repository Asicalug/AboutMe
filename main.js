
$('.solarinfo li').click(function() {
    $('.more-container').css( {
        'display': 'flex'
    });
    $('.more-solarinfo').css( {
        'display': 'flex'
    });
});
$('.hybrisinfo li').click(function() {
    $('.more-container').css( {
        'display': 'flex'
    });
    $('.more-hybrisinfo').css( {
        'display': 'flex'
    });
});
$('.more-container').click(function() {
    $(this).css( {
        'display': 'none'
    });
    $('.more-solarinfo').css( {
        'display': 'none'
    });
    $('.more-hybrisinfo').css( {
        'display': 'none'
    });
});
$('.navbar-projects').click(function() {
    $(location).prop('href', 'test.html')
}) 