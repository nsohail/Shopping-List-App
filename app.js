$(document).ready(function(){

	//error when nothing is inputed

	$('.add').click(function(){
		var entryItem=$('.entry').val();


		if (entryItem.trim().length !== 0){
			
			var $newItem = $("<li>").addClass("items");
			$newItem.text(entryItem);
		
			$newItem.appendTo("#items");
			$('.entry').val('');

			var $checkItem= $("<div>").addClass("unchecked");
			$checkItem.prependTo($newItem);

			var $removeOption= $("<button>").addClass("remove").text('remove');
			$removeOption.appendTo($newItem);


		} else {
			alert('Enter an item');
		}

		return false;

	});

	$('#items').on('click', '.remove', function(){
		$(this).closest('li').remove();

	});

	function clear(){
		$('#items').children('.items').remove();
	}

	$('.clear').on('click', function(){

		clear();
	});
	
	//Target clear button and add an event listener for click
	$('#clear .tab button.clear').click(function(){
	    //Get height of container and subtract height of search area + padding
	    var height = parseInt($('#container').css('height').replace('px','')) - 
	        (parseInt($('#search_area').css('padding-top').replace('px','')) + 
	         parseInt($('#search_area').css('padding-top').replace('px','')) +
	         parseInt($('#search_area').css('height').replace('px','')));
	    //Store old height
	    var oldHeight = $('#clear .bottom_tab').css('height');
	    //Target bottom area
	    $('#clear .bottom_tab')
	        //Animate it by changing height to calculated height of container - search area
	        .animate({height:height+'px'},1000)
	        //Delay retreat animation
	        .delay('500')
	        //Animate back to start
	        .animate({height:oldHeight},1000);
	    //Console just for testing
	    console.log('clear',height,oldHeight);
	});


});
