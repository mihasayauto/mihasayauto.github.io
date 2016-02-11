$(function() {
  $('#carousel').carouFredSel({
    width: '100%',
    items: {
      visible: 3,
      start: -1
    },
    scroll: {
      items: 1,
      duration: 1000,
      timeoutDuration: 5000
    },
    prev: '#prev',
    next: '#next',
    pagination: {
      container: '#pager',
      deviation: 1
    }
  });

  $('.btn-1,.btn-2,.btn-3').hover(
  	function(){
  		$(this).find('.btn-block').addClass('active');
  	},
  	function(){
  		$(this).find('.btn-block').removeClass('active');
  	}
  );
});