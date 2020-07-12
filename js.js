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

	$('.question #submit').on('click',function(){
		var now=$(this).parents('form:first').data('question');
		var next=$(this).parents('form:first').data('question')+1;
		checkAnswer(''+next);
		$('.question').hide();
		$('#q'+next).show();
		
	});
	return false;
	});
return false;
});

function checkAnswer(n){
	var check=$('input[name'+n+']:cheked').val();
	if (check===solutions[n-1]) {
		score++;
	}
	if(n===10){
		$('#result').html('<h3>Your final score is: '+score+'out of 10</h3><a href="html.html"></a>')
	}
}