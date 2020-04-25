$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(".case-button").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  tooltip.tooltip('show');
  text = tooltip.attr('name');
  var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
});

$(".case-button").on('mouseleave', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copy Text');
});
