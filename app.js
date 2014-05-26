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
		var target=$(this);
		target.addClass('animate_clear');
		setTimeout(function(){
			target.removeClass('animate_clear');
		}, 2000
			);



		/*removeList=function(){
			$(this).closest('li').remove();
		};*/
		var removeList=$('#items1').closest('items');

		removeList.remove();
		
	});



		function clear(){
		$('#items1').children().remove();
	}



	$('#clear').on('click', '.clear', function(){
		clear();
		return false;
	});



});