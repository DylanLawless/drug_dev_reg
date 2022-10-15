(function($) {
	$(document).ready( function() {
					
		// Adds a class to li's with a nested ul...
		$("ul li").has('ul').addClass('has-kids');
	
		// Adds a class to last li in a ul...
		$("ul li:last-child").addClass("last");
				
		// Adds a custom class to form labels with 'textarea' types...
		$(".entry-content .gform_wrapper li").has("textarea").find('label').addClass('label-block');

		// Adds a custom class to form labels with 'checkbox' types...
		$(".entry-content .gform_wrapper li").has("input[type=checkbox]").find('label.gfield_label').addClass('label-block');
								
		// Toggles default form field values...
		jQuery.fn.cleardefault = function() {
		    return this.focus(function() {
		        if( this.value == this.defaultValue ) {
		            this.value = "";
		        }
		    }).blur(function() {
		        if( !this.value.length ) {
		            this.value = this.defaultValue;
		        }
		    });
		};
		$('input[type="text"],textarea').cleardefault();		
	
		// Adds Custom Elements to Main Nav Sub Menu...
		$('#topNav ul ul').each( function() {
			$(this).wrapInner('<div class="sub-menu-menu"></div>');
		});
		$('#topNav ul ul .sub-menu-menu').each( function() {
			var introTitle = $(this).parent().parent().find('> a').attr('title');
			$(this).before('<div class="sub-menu-intro"><div class="sub-menu-title">' + introTitle + '</div></div>');
			$(this).parent().prev().appendTo( $(this).parent().find('.sub-menu-intro') );
		});
		$('#topNav ul ul li:first-child').each( function() {
			var readMoreTitle = $(this).parent().parent().prev().attr('title');
			$(this).before('<div class="sub-menu-read-more">Read More concerning ' + readMoreTitle + ' </div>');
		});
				
		// Poster Slider...
		$('#media-slider-posters .hentry:nth-child(2)').addClass( 'current-slide' );
		$('#media-slider-posters .current-slide').prev().addClass('previous-slide');
		$('#media-slider-posters .current-slide').next().addClass('next-slide');
		$('#media-slider-posters .media-slider').carouFredSel({
			width: '100%',
			items: {
				visible: 3,
				minimum: 2,
				start: -1
			},
			/*auto: {
				play: false
			},*/ 
			scroll: {
				items: 1,
				duration: 750,
				timeoutDuration: 6000,
				easing: 'quadratic',
				onBefore: function() {
					$('#media-slider-posters .hentry').removeClass('current-slide');
					$('#media-slider-posters .hentry').removeClass('previous-slide');
					$('#media-slider-posters .hentry').removeClass('next-slide');					
				},
				onAfter: function() {
					$('#media-slider-posters .hentry:nth-child(2)').addClass('current-slide');
					$('#media-slider-posters .current-slide').prev().addClass('previous-slide');
					$('#media-slider-posters .current-slide').next().addClass('next-slide');
				}
			},
			prev: '#media-slider-posters .slider-prev',
			next: '#media-slider-posters .slider-next',
			pagination: {
				container: '#media-slider-posters .slider-nav-items',
				deviation: 1
			}
		});
		
		// Video Slider...
		$('#media-slider-videos .hentry:nth-child(2)').addClass( 'current-slide' );
		$('#media-slider-videos .current-slide').prev().addClass('previous-slide');
		$('#media-slider-videos .current-slide').next().addClass('next-slide');
		$('#media-slider-videos .media-slider').carouFredSel({
			width: '100%',
			items: {
				visible: 3,
				minimum: 2,
				start: -1
			},
			/*auto: {
				play: false
			},*/ 
			scroll: {
				items: 1,
				duration: 750,
				timeoutDuration: 6000,
				easing: 'quadratic',
				onBefore: function() {
					$('#media-slider-videos .hentry').removeClass('current-slide');
					$('#media-slider-videos .hentry').removeClass('previous-slide');
					$('#media-slider-videos .hentry').removeClass('next-slide');					
				},
				onAfter: function() {
					$('#media-slider-videos .hentry:nth-child(2)').addClass('current-slide');
					$('#media-slider-videos .current-slide').prev().addClass('previous-slide');
					$('#media-slider-videos .current-slide').next().addClass('next-slide');
				}
			},
			prev: '#media-slider-videos .slider-prev',
			next: '#media-slider-videos .slider-next',
			pagination: {
				container: '#media-slider-videos .slider-nav-items',
				deviation: 1
			}
		});
		
		// White Papers Slider...
		$('#media-slider-white-papers .hentry:nth-child(2)').addClass( 'current-slide' );
		$('#media-slider-white-papers .current-slide').prev().addClass('previous-slide');
		$('#media-slider-white-papers .current-slide').next().addClass('next-slide');
		$('#media-slider-white-papers .media-slider').carouFredSel({
			width: '100%',
			items: {
				visible: 3,
				minimum: 2,
				start: -1
			},
			/*auto: {
				play: false
			},*/ 
			scroll: {
				items: 1,
				duration: 750,
				timeoutDuration: 6000,
				easing: 'quadratic',
				onBefore: function() {
					$('#media-slider-white-papers .hentry').removeClass('current-slide');
					$('#media-slider-white-papers .hentry').removeClass('previous-slide');
					$('#media-slider-white-papers .hentry').removeClass('next-slide');					
				},
				onAfter: function() {
					$('#media-slider-white-papers .hentry:nth-child(2)').addClass('current-slide');
					$('#media-slider-white-papers .current-slide').prev().addClass('previous-slide');
					$('#media-slider-white-papers .current-slide').next().addClass('next-slide');
				}
			},
			prev: '#media-slider-white-papers .slider-prev',
			next: '#media-slider-white-papers .slider-next',
			pagination: {
				container: '#media-slider-white-papers .slider-nav-items',
				deviation: 1
			}
		});
				
	}); // end document ready
		
})(jQuery);