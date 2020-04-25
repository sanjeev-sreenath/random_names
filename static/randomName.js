$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(".case-button").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  tooltip.tooltip('show');
});

$(".case-button").on('mouseleave', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copy Text');
});

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }


function anotherName() {
    location.reload();
}