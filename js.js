var solutions=['c','a','b','d','c','a','b','c','a','a'];
var score=0;

function save(name,score){
	localStorage.setItem(name, score);
}

$(document).ready(function(){
	$('.question').hide();
	$('#init').show();
	$('#search').on('click',function(){
		var find=$('#find').val();
			for(var key in localStorage){
				if(key===find){
					alert(localStorage[key]);
					return false;
				}
			}
			alert('player not found');
	})
	$('#init #start').on('click',function(){
	var name=$('#inp').val();

	if(name===''){
		alert('Missing player name');
		return false;
		}
	else{
		$('#init').hide();
		$('#q1').fadeIn(300);
		$('#q1 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q1')
		$('#q2').fadeIn(300);
		return false;
	})
	$('#q2 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q2')
		$('#q3').fadeIn(300);
		return false;
	})
	$('#q3 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q3')
		$('#q4').fadeIn(300);
		return false;
	})
	$('#q4 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q4')
		$('#q5').fadeIn(300);
		return false;
	})
	$('#q5 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q5')
		$('#q6').fadeIn(300);
		return false;
	})
	$('#q6 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q6')
		$('#q7').fadeIn(300);
		return false;
	})
	$('#q7 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q7')
		$('#q8').fadeIn(300);
		return false;
	})
	$('#q8 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q8')
		$('#q9').fadeIn(300);
		return false;
	})
	$('#q9 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q9')
		$('#q10').fadeIn(300);
		return false;
	})
	$('#q10 #submit').on('click',function(){
		$('.question').hide();
		checkAnswer('q10')
		$('#result').fadeIn(300);
		save(name,score);
		return false;
	})
	
	}
	return false;

	});
	
}); 
function checkAnswer(question){
	if (question==='q1') {
		var test=$('input[name=q1]:checked').val();
		if (test===solutions[0]) {
			score++;
		}
	}
	if (question==='q2') {
		var test=$('input[name=q2]:checked').val();
		if (test===solutions[1]) {
			score++;
		}
	}
	if (question==='q3') {
		var test=$('input[name=q3]:checked').val();
		if (test===solutions[2]) {
			score++;
		}
	}
	if (question==='q4') {
		var test=$('input[name=q4]:checked').val();
		if (test===solutions[3]) {
			score++;
		}
	}
	if (question==='q5') {
		var test=$('input[name=q5]:checked').val();
		if (test===solutions[4]) {
			score++;
		}
	}
	if (question==='q6') {
		var test=$('input[name=q6]:checked').val();
		if (test===solutions[5]) {
			score++;
		}
	}
	if (question==='q7') {
		var test=$('input[name=q7]:checked').val();
		if (test===solutions[6]) {
			score++;
		}
	}
	if (question==='q8') {
		var test=$('input[name=q8]:checked').val();
		if (test===solutions[7]) {
			score++;
		}
	}
	if (question==='q9') {
		var test=$('input[name=q9]:checked').val();
		if (test===solutions[8]) {
			score++;
		}
	}
	if (question==='q10') {
		var test=$('input[name=q10]:checked').val();
		if (test===solutions[9]) {
			score++;
		}
		if(score>5){
			$('#result').html('<h3>Your final score is: '+score+' out of 10</h3><a href="html.html">RETRY AGAIN !!!</a><audio autoplay><source src="win.mp3"></audio>');
		}
		else{
			$('#result').html('<h3>Your final score is: '+score+' out of 10</h3><a href="html.html">RETRY AGAIN !!!</a><audio autoplay><source src="fail.mp3"></audio>');
		}
	}
	return score;
}


	