var solutions=['c','a','b','d','c','a','b','c','a','a'];
var players=[];
var score=0;

$(document).ready(function(){
	$('.question').hide();
	$('#init').show();

	$('#init #start').on('click',function(){
	$('#init').hide();
	$('#q1').fadeIn(300);
	$('#q1 #submit').on('click',function(){
		$('.question').hide();
		$('#q2').fadeIn(300);
		return false;
	})
	$('#q2 #submit').on('click',function(){
		$('.question').hide();
		$('#q3').fadeIn(300);
		return false;
	})
	$('#q3 #submit').on('click',function(){
		$('.question').hide();
		$('#q4').fadeIn(300);
		return false;
	})
	$('#q4 #submit').on('click',function(){
		$('.question').hide();
		$('#q5').fadeIn(300);
		return false;
	})
	$('#q5 #submit').on('click',function(){
		$('.question').hide();
		$('#q6').fadeIn(300);
		return false;
	})
	$('#q6 #submit').on('click',function(){
		$('.question').hide();
		$('#q7').fadeIn(300);
		return false;
	})
	$('#q7 #submit').on('click',function(){
		$('.question').hide();
		$('#q8').fadeIn(300);
		return false;
	})
	$('#q8 #submit').on('click',function(){
		$('.question').hide();
		$('#q9').fadeIn(300);
		return false;
	})
	$('#q9 #submit').on('click',function(){
		$('.question').hide();
		$('#q10').fadeIn(300);
		return false;
	})
	$('#q10 #submit').on('click',function(){
		$('.question').hide();
		$('#result').fadeIn(300);
		return false;
	})
	return false;
	});
	
}); 



	