$(document).ready(function(){

	//error when nothing is inputed

	$('.add').click(function(){
		var entryItem=$('.entry').val();


		if (entryItem.trim().length !== 0){

			$('#items1').append('<li class="items"><div class="unchecked"></div><span class="text">'+entryItem+'</span><button type "button" class="remove">Remove</button></li>');

			$('.entry').val('');


		} else {
			alert('Enter an item');
		}

		return false;

	});


	//crossing off a list item
    

    $('#items1').on('click', 'div', function () {
        $(this).toggleClass('checked unchecked');
        $(this).siblings('span').toggleClass('text checkedText');
    });



	$('#items1').on('click', '.remove', function(){
		event.preventDefault();
		var target=$(this);
		target.addClass('animate_clear');
		setTimeout(function(){
			target.removeClass('animate_clear').closest('li').remove();
		}, 2000);
	
	});





	$('#clear').on('click', '.clear', function(){
		var target=$(this);
		target.addClass('animate_clear_vertical');
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









	/*	function clear(){
		$('#items1').children().remove();
	}



	$('#clear').on('click', '.clear', function(){
		clear();
		return false;
	});

*/