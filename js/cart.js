// JavaScript Document


$(document).ready(function() {

	var $flowers = $('#flower-items');

	$flowers.find('a').on('click', function(e){
		e.preventDefault();
		
		var $link = $(this),		    
			$img = $link.find('img');
		
		// add a copy of the image to the document
		$ghost = $img.clone().appendTo($link).addClass('cartimage');
		
		var imgCoords = $img.offset(),
			$target = $('#cart'),
			targetCoords = $target.offset();
		
		$ghost.animate({
			'left' : targetCoords.left - imgCoords.left,
			'top' : targetCoords.top - imgCoords.top,
			'opacity' : 0,
			'width' : '30px'
		}, 1500, function(){
			$(this).remove();
			$target.append('Added 1 ' + $link.find('img').attr('alt') + '.<br>');
		});
	});
});