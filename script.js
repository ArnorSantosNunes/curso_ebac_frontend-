$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#button-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const formulario = $('#formulario').val();
        const novatarefa = $('<li id="li"></li>');
        $(`<h3>${formulario}</h3>`).appendTo(novatarefa);
        $(novatarefa).appendTo('ul');
        $('#formulario').val('');

        
        novatarefa.click(function () {
            $(this).toggleClass('riscado');
        });
    });
});

