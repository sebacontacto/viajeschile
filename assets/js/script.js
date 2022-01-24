$(document).ready(function() {
    /*Modificacion del intervalodel carrousel*/
    $('.carousel').carousel({
        interval: 4500
    });

    $("a").click(function() {
        var gato = this.hash

        $("html, body").animate({
                scrollTop: $(gato).offset().top - 70
            },
            800
        )
    });



});

/*Implementcion sw Tooltips*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});