$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// $("a.my-tool-tip").tooltip();
// $("#copy-button").on('click', function() {
//   var tooltip = $(this);
//   tooltip.attr('data-original-title', 'Copied!');
//   $("a.my-tool-tip").tooltip('show');
// });

// function sample(abcd) {
//     var tooltip = document.getElementById('my-button2');
//     tooltip.attr('data-original-title', 'WOW!');
//     $("#my-button2").tooltip('show');
// }
// $("#my-button2").on('click', function() {
//   var tooltip = $(this);
//   tooltip.attr('data-original-title', 'Copied!');
//   $("#my-button1").tooltip('show');
// });

$("#0").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#0").tooltip('show');
});
$("#1").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#1").tooltip('show');
});
$("#2").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#2").tooltip('show');
});
$("#3").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#3").tooltip('show');
});
$("#4").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#4").tooltip('show');
});
$("#5").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#5").tooltip('show');
});
$("#6").on('click', function() {
  var tooltip = $(this);
  tooltip.attr('data-original-title', 'Copied!');
  $("#6").tooltip('show');
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