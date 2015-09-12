$(document).ready(function(){

	resizeSectionsHeight();

	$('#main-navbar').affix({
		offset: {
			top : function(){
				var $nav = $("#main-navbar .navbar-header").first(),
					sectionHeight=$('#first-section').outerHeight(true),
					navHeight = $nav.outerHeight(true),
					$body = $('body');

				if($body.hasClass('navbar-relative') &&  $nav.hasClass('affix-top'))
					return sectionHeight;

				return sectionHeight - navHeight;
			}
			// ,
			// bottom: 10000
		}
	});



    smoothScroll.init({
	    speed: 500, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInOutCubic', // Easing pattern to use
	    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels
	});	

	$('#main-navbar .navbar-nav a').on('click', function() {
	    var navbar_toggle = $('#main-navbar .navbar-toggle');
	    if (navbar_toggle.is(':visible')) {
	        navbar_toggle.trigger('click');
	    }
	});
	
	$("#invite-form").on('submit', function(event){
		event.preventDefault();
		var data = $(this).serialize();
		
		$.ajax({
			'type': 'POST', 
			'url': './register.php', 
			'data': data,
			'dataType': 'json'
		}).done(function(data){
			if(data.success)
				alert('Tack för din anmälan!');
			else
				alert('Något gick fel! Försök igen senare')		
		}).fail(function(data){
			alert('Något gick fel. Försök igen senare');		
		});
	});
});




$(window).resize(function() {
	resizeSectionsHeight();
});

function resizeSectionsHeight(){
	var startSections = $('#first-section, #first-dummy-section'),
		sections = $('.page-section').not(startSections),
		nav = $('#main-navbar .navbar-header').first(),
		body = $('body');

	var windowHeight = $(window).height();
	/*
	sections.each(function(){
		var $section = $(this),
			totalHeight=0;

		$section.children().each(function(){
			totalHeight+=$(this).height();
		})

		var height = windowHeight>totalHeight ? windowHeight : totalHeight;
		$section.height(height);
	});
	*/
	var startSectionHeight = 0;

	var totalHeight = 0;
	startSections.first().children().each(function(){
		totalHeight+=$(this).height();
	});
	if(windowHeight>(totalHeight+nav.height())){
		startSections.height(windowHeight-3);
		startSections.first().addClass('static');
		startSections.last().addClass('hidden');
		body.addClass('navbar-bottom');
		body.removeClass('navbar-relative');
	}else {
		startSections.height(totalHeight+nav.height());
		startSections.first().addClass('relative');
		startSections.last().addClass('hidden');
		body.removeClass('navbar-bottom');
		body.addClass('navbar-relative');
	}

}
