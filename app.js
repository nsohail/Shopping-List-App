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


		} else {
			alert('Enter an item');
		}

		return false;

	});


});