/**
 * On ready function.
 */
$(function() {

  // Bind click event to the button.
  $('#increment').click(function(event) {
    
    // Increment the value of currentValue input field by 1.
    var currentValue = $('#current_value').val();
    $('#current_value').val(++currentValue);
  });
});
