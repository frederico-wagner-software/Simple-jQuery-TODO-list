$(document).ready(
    function () {
        $('#button').click(
            function () {
                var newItemText = $('input[name=ListItem]').val();
                $('ol').append('<li>' + newItemText + '</li>');
            });

        $("input[name=ListItem]").keyup(function (event) {
            if (event.keyCode == 13) {
                $("#button").click();
            }
        });

        $(document).on('dblclick', 'li', function () {
            $(this).toggleClass('strike').fadeOut('slow');
        });

        $('input').focus(function () {
            $(this).val('');
        });

        $('ol').sortable();

    }
);