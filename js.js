var solutions=['c','a','b','d','c','a','b','c','a','a'];
var players={};
var score=0;

$(document).ready(function(){
	$('.question').hide();
	$('#init').show();

	$('#init #start').on('click',function(){
	$('#init').hide();
	$('.question').hide();
	$('#q1').show();


	
	return false;
	});

});