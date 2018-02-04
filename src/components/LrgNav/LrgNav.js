$(document).ready(function() {
  $('.lrg-nav-svg-wrapper').hover(
    function() {
      $(this)
        .find('.lrg-nav-shape')
        .addClass('lrg-nav-shape-hover')
        .removeClass('lrg-nav-shape-hover-off');
      $(this)
        .find('.lrg-menu-link-text')
        .toggleClass('lrg-menu-link-text-hover');
    },
    function() {
      $(this)
        .find('.lrg-nav-shape')
        .removeClass('lrg-nav-shape-hover')
        .addClass('lrg-nav-shape-hover-off');
      $(this)
        .find('.lrg-menu-link-text')
        .toggleClass('lrg-menu-link-text-hover');
    }
  );
});
