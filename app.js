$(document).ready(function(){   
	//Container is set to min-height 100%. 
	//We need to store what it's height should be at 100% for later use 
	//this is the height of the list area
	var container_full_height = parseInt($('#container').css('height').replace('px','')) - 
	        (parseInt($('#search_area').css('padding-top').replace('px','')) + 
	         parseInt($('#search_area').css('padding-bottom').replace('px','')) +
	         parseInt($('#search_area').css('height').replace('px','')));



	//error when nothing is inputed

	$('.add').click(function(){
		var entryItem=$('.entry').val();


		if (entryItem.trim().length !== 0){

			$('#items1').append('<li class="items"><div class="removeListItems"><div class="unchecked"></div><span class="text">'+entryItem+'</span></div><button type "button" class="remove">Remove</button></li>');

			$('.entry').val('');


		} else {
			alert('Enter an item');
		}

		return false;

	});


	//crossing off a list item
    

    $('#items1').on('click', '.unchecked', function () {
        $(this).toggleClass('checked');
        $(this).siblings('span').toggleClass('text checkedText');
    });



    //removing single item

	$('#items1').on('click', '.remove', function(){
		event.preventDefault();
		var target=$(this);
		target.addClass('animate_clear');

		setTimeout(function(){
			//target.removeClass('animate_clear').closest('li').remove();
			target.siblings('div').remove();
		},1000);

		setTimeout(function(){
			target.removeClass('animate_clear');
		}, 2200); //do this after 1600 milliseconds

		setTimeout(function(){
		$( target.closest('li') ).fadeOut(900)}
		,2250); //do this after 2100 milliseconds
			
	});
		

		







	$('#clear .tab button.clear').click(function(){
		var height = parseInt($('#container').css('height').replace('px','')) - 
		        (parseInt($('#search_area').css('padding-top').replace('px','')) + 
		         parseInt($('#search_area').css('padding-bottom').replace('px','')) +
		         parseInt($('#search_area').css('height').replace('px','')));

		var oldHeight = $('#clear .bottom_tab').css('height');
		

		$('#clear .bottom_tab').animate({height:height+'px'},1000,removeAll)
		.delay('1000')
		.animate({height:oldHeight},1000);

		function removeAll(){
	    if(height > container_full_height){  //if the new height w/items is bigger than the original height
	    $('#clear .bottom_tab').css({height:container_full_height}); //
	    }


	    //Remove list items
		$('#items1').children().remove();
		}
	});








});//document ends









	/*	function clear(){
		$('#items1').children().remove();
	}



	$('#clear').on('click', '.clear', function(){
		clear();
		return false;
	});

*/