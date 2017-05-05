$(document).ready(function() {
	X();
	Y();
	Z();
	back();
	cube();
})

function cube(){
	$(".cube").click(function(){
		console.log(1);
	})
}
function X() {
    $(".rotateX").click(function(event) {
        /* Act on the event */
        $('.cube').removeClass('moveY');
        $('.cube').removeClass('moveZ');
        $(".cube").addClass("moveX");
    });
};

function Y() {
    $(".rotateY").click(function(event) {
        /* Act on the event */
        $('.cube').removeClass('moveX');
        $('.cube').removeClass('moveZ');
        $(".cube").addClass("moveY");
    });
};
function Z() {
    $(".rotateZ").click(function(event) {
        /* Act on the event */
        $('.cube').removeClass('moveX');
        $('.cube').removeClass('moveY');
        $(".cube").addClass("moveZ");
    });
};

function back(){
	$(".back").click(function(){
		window.location.href='https://pupulul.github.io/resume/';
	})
}