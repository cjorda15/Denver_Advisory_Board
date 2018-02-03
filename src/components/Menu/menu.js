import $ from 'jquery';
$(document).ready(function() {
  $(document).on('click', '#menu a', function(e) {
    $('.burger').click();
  });

  $('.svg-wrapper').hover(
    function() {
      $(this)
        .find('.shape')
        .addClass('shape-hover')
        .removeClass('shape-hover-off');
    },
    function() {
      $(this)
        .find('.shape')
        .removeClass('shape-hover')
        .addClass('shape-hover-off');
    }
  );
});
