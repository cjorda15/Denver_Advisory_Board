console.log('!!');

$(document).ready(function() {
  // function handleHover(that){
  //   const openLine1 = $('.open-event-click-line-1');
  //   const openLine2 = $('.open-event-click-line-2');
  //   const openLine3 = $('.open-event-click-line-3');
  //   that.find('.open-event-click-line-1').toggleClass('open-event-line-1-hover')
  //   that.find('.open-event-click-line-2').toggleClass('open-event-line-2-hover')
  //   that.find('.open-event-click-line-3').toggleClass('open-event-line-3-hover')
  // }

  // const eventClickBtn = $('.open-event-click-open-btn');

  $(document).on('mouseenter', '.open-event-click-open-btn', function() {
    $(this)
      .find('.open-btn-line-1')
      .toggleClass('open-event-line-1-hover');
    $(this)
      .find('.open-btn-line-2')
      .toggleClass('open-event-line-2-hover');
    $(this)
      .find('.open-btn-line-3')
      .toggleClass('open-event-line-3-hover');
  });

  $(document).on('mouseleave', '.open-event-click-open-btn', function() {
    console.log('!!??!');
    $('.open-btn-line-1').toggleClass('open-event-line-1-hover');
    $('.open-btn-line-2').toggleClass('open-event-line-2-hover');
    $('.open-btn-line-3').toggleClass('open-event-line-3-hover');
  });
});
