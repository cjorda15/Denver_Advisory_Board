$(document).ready(function() {
  // $(document).on('mouseenter', '.open-event-click-open-btn', function() {
  //   $(this)
  //     .find('.open-event-click-line-1')
  //     .toggleClass('open-event-line-1-hover');
  //   $(this)
  //     .find('.open-event-click-line-2')
  //     .toggleClass('open-event-line-2-hover');
  //   $(this)
  //     .find('.open-event-click-line-3')
  //     .toggleClass('open-event-line-3-hover');
  // });

  // $(document).on('mouseleave', '.open-event-click-open-btn', function() {
  //   $(this)
  //     .find('.open-event-click-line-1')
  //     .toggleClass('open-event-line-1-hover');
  //   $(this)
  //     .find('.open-event-click-line-2')
  //     .toggleClass('open-event-line-2-hover');
  //   $(this)
  //     .find('.open-event-click-line-3')
  //     .toggleClass('open-event-line-3-hover');
  // });

  $(document).on('click', '.open-event-click-open-btn', function() {
    $(this)
      .find('.open-event-click-line-1')
      .toggleClass('close-event-line-1');
    $(this)
      .find('.open-event-click-line-2')
      .toggleClass('close-event-line-2');
    $(this)
      .find('.open-event-click-line-3')
      .toggleClass('close-event-line-3');
  });
});
