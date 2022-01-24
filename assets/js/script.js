$(document).ready(function() {
    /*Modificacion del intervalodel carrousel*/
    $('.carousel').carousel({
        interval: 4500
    })

});

/*Implementcion sw Tooltips*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})