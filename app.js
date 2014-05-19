$(document).ready(function(){

	//error when nothing is inputed

	$('.add').click(function(){
		var entryItem=$('.entry').val();


		if (entryItem.trim().length !== 0){
			
			$('#items1').append('<li class="items"><div class="unchecked"></div><span class="text">'+entryItem+'</span><button type "button" class="remove">Remove</button></li>');

			//$('.entry').val('');


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
		$(this).closest('li').remove();
	});



		function clear(){

		//$('#clear').animate({bottom:0},100);
		//$('#clear').animate({height: "toggle"}, 500);
		$('#items1').children().remove();
	}



	$('.clear').on('click', function(){
		//alert($('#items1').children('.items').attr('class'));

		clear();

		return false;
	});



});