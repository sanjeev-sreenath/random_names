$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$("a.my-tool-tip").tooltip();
$("#copy-button").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("a.my-tool-tip").tooltip('show');
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