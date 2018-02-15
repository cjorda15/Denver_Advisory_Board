import $ from 'jquery';
$(document).ready(function() {
  $(document).on('click', '#menu a', function(e) {
    $('.burger').click();
    $('body').removeClass('no-scroll');
  });

  $(document).on('mouseenter', '.svg-wrapper', function() {
    $(this)
      .find('.shape')
      .addClass('shape-hover')
      .removeClass('shape-hover-off');
    $(this)
      .find('.menu-link-text')
      .toggleClass('menu-link-text-hover');
  });

  $(document).on('mouseleave', '.svg-wrapper', function() {
    $(this)
      .find('.shape')
      .removeClass('shape-hover')
      .addClass('shape-hover-off');
    $(this)
      .find('.menu-link-text')
      .toggleClass('menu-link-text-hover');
  });
});
