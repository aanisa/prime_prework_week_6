// 5-1 Challenge

console.log('JS loaded');

/*
See the README.md file for instructions
*/

var onReady = function() {
  console.log('DOM ready');

  // 1 - hide just the h1 inside header
  // write your code for question 1 here.
$('header').hide();

  // 2 - change the background color of 'step-two' to yellow
  // write your code for question 2 here.
$('#step-two').css('text-color', 'yellow');

  // 3 - fadout example elements
  // 3 bonus - wait one second and fade back in
  // write your code for question 3 here.
$('example-list').fadeOut('fast').delay(1000).fadeIn('fast');

  // 4 - select all odd list items and change to blue
  // write your code for question 4 here.
$('li:nth-child(odd)').css('text-color', 'blue');

  // 5 - select the last list item with a pseudo selector
  // write your code for question 5 here.
$('li:last').select();

  // 6 - select the last list item with traversal
  // write your code for question 6 here.
$('ui').children('li.last');
};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
