$(document).ready(function(){
	var navpos=$('#navbarmain').offset();
	$(window).bind('scroll', function() {
		if($(window).scrollTop()>navpos.top)
		{
			$('#navbarmain').addClass('navbar-fixed-top');
		}
		else{
			$('#navbarmain').removeClass('navbar-fixed-top');
		}	
	});
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event){
	event.preventDefault();
	$(this).ekkoLightbox();
});