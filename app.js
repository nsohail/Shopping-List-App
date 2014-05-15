$(document).ready(function(){

	function addItem(){
		var entryItem=$('.entry').val();
		if (entryItem===''){
		alert('Enter an item');
		}
		else{
			$('.items').appendTo('#items').html(addItem+$(".remove"));
		}

		$('.entry').val('');
	}

	$('.add').click(addItem);

});