$(document).ready(function() {
  $(document).on('mouseenter', '.lrg-nav-svg-wrapper', function() {
    $(this)
      .find('.lrg-nav-shape')
      .addClass('lrg-nav-shape-hover')
      .removeClass('lrg-nav-shape-hover-off');
    $(this)
      .find('.lrg-menu-link-text')
      .toggleClass('lrg-menu-link-text-hover');
  });

  $(document).on('mouseleave', '.lrg-nav-svg-wrapper', function() {
    $(this)
      .find('.lrg-nav-shape')
      .removeClass('lrg-nav-shape-hover')
      .addClass('lrg-nav-shape-hover-off');
    $(this)
      .find('.lrg-menu-link-text')
      .toggleClass('lrg-menu-link-text-hover');
  });
});
