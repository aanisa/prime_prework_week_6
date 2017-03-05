$(document).ready(function() {
                                  //NEED TO ADD .CLICK SO WILL WORK WHEN CLICK BUTTON
  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  $( '#fadeDiv' ).on( 'click', function(){
    fadeCat();
  });
  $( '#hideDiv' ).on( 'click', function(){
    hideCat();
  });
  $( '#animateDiv' ).on( 'click', function(){
    animateCat();
  });
  $( '#resetDiv' ).on( 'click', function(){
    resetCat();
  });
});

// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  $(this).fadeTo('fast', 0.5);
  console.log('enter');
}

// nav bar function to fade when mouse enters button
function mouseLeaveButton() {
  $(this).fadeTo('fast', 1);
  console.log('leave');
}

// hideCat is a function to hide the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  // append '<p>hide toggle</p>' to 'clickList'
  $('#catImg').hide();
  $('clickList').append("<p>hide toggle</p>");
}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat() {
  //TODO your function code here
  // toggle catImg fade
  // append '<p>fade toggle</p>' to 'clickList'
  $('#catImg').toggleFade();
  $('clickList').append("<p>fade toggle</p>");
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  //TODO your function code here
  // animate catImg
  // append '<p>animate</p>' to 'clickList'
  $('#catImg').animate(function() {
    $(this).height('10px');
    $(this).width('10px');
  $('clickList').append("<p>animate</p>");
});
}
// PRO MODE
// resetCat is a function to reset the cat photo to it's original size
// when that button is clicked.
function resetCat() {
  // reset catImg
  // append '<p>reset</p>' to 'clickList'
  $('#catImg').reset();
  $('clickList').append("<p>reset</p>");
}
