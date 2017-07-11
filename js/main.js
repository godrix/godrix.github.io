var span = document.getElementById('txt');
var contentxt = 'arlos Godri';

function writetxt(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 200);
}

writetxt(contentxt, span);

$('.header_menu a[href^="#"]').click(function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href'),
        menuHeight = $('.header').innerHeight(),
        targetOffset = $(anchor).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
    console.log(targetOffset);
});

$('.logo').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});
