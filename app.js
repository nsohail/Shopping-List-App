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
		}, 1600); //do this after 1600 milliseconds
	});





$('#clear .tab button.clear').click(function(){
//Get height of container and subtract height of search area + padding
var height = 505;

//Store old height
var oldHeight = $('#clear .bottom_tab').css('height');

//Target bottom area
$('#clear .bottom_tab').animate({height:height+'px'},1000);


setTimeout(function(){
var items=$('#items1').children();

$('#clear .bottom_tab').animate({height:oldHeight},1000);
items.remove();
});

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