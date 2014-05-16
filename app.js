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


});