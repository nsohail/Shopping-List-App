$(document).ready(function(){

	//error when nothing is inputed

	$('.add').click(function(){
		var entryItem=$('.entry').val();


		if (entryItem.trim().length !== 0){
			
			var $newItem = $("<li>").addClass("items");
			$newItem.text(entryItem);
		
			$newItem.appendTo("#items1");
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

	$('#items1').on('click', '.remove', function(){
		$(this).closest('li').remove();

	});

	function clear(){

		//$('#clear').animate({bottom:0},100);
		$('#clear').animate({height: "toggle"}, 500);
		$('#items1').children().remove();
		
	}

	$('.clear').on('click', function(){
		//alert($('#items1').children('.items').attr('class'));

		clear();

		return false;
	});


});