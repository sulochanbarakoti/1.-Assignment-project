$(document).ready(function() {
	$('.edit-content').hide();
	$('.reset-content').hide();
	$('ul.menu li').on('click', function(event) {
		var current_id = $(this).attr("id");
		$('.menu-content').hide();
		if(!$(this).hasClass('menu-active')) {
			$('li.menu-active').removeClass('menu-active');
			$(this).addClass('menu-active');
		}
		if (current_id == "view-profile") {
			$('.profile-content').show();
		}
		else if (current_id == "edit-profile") {
			$('.edit-content').show();
		}
		else {
			$('.reset-content').show();
		}
	})
})


var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


var i = 0;
$('.btn-panel').click(
	function(){
		i++;
		if(i%2 != 0) {
			$(this).parent().siblings('.panel-hidden').css("display", "block");
		}
		else {
			$(this).parent().siblings('.panel-hidden').css("display", "none");
		}
})