$('#toggle').click(
  function(){
    if($('.navbar-collapse').has('show')){
      $('header .container-fluid').toggleClass('box-shadow')
    }
  }
)
$("#main").click(function(e) {
	if (!$(e.target).is('main')) {
    	$('.collapse').collapse('hide');	
      $('header .container-fluid').removeClass('box-shadow')    
    }
});