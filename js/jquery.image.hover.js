$(document).ready(function () {
	$(".profile-image img").hover(function () {
		$(this).attr("src" ,"images/profile_picture2.png");
	}, function () {
		$(this).attr("src" ,"images/profile_picture1.png");
	});
});
