$(document).ready(function() {

$(".chat-mssg-start").hide();
var c=0;

$(".chat-icon").click(function () {

  	if($("#iconImg").attr('src') == 'images/Sparrow Bird.png')
   		$("#iconImg").attr('src', 'images/icons8-cross-mark-76.png');
	else
   		$("#iconImg").attr('src', 'images/Sparrow Bird.png');


   	
   	if($(".chat-mssg-end").css("display") != "block"){
   		if(c==0)
   			$(".chat-mssg-start").toggle();
   		else
   			$(".chat-mssg-end").css("display","block");
   	}
   	else
   		$(".chat-mssg-end").css("display","none");
   	
  });


$(".chat-2-3").click(function () {
	c=c+1;
	$(".chat-mssg-start").hide();
	$(".chat-mssg-end").css("display","block");
});


$(".tb").click(function () {
	var mssg= $(".text").val();
	var n= $("<div></div>").text(mssg).addClass("user1");
	$(".main").append(n);
	$(".text").val("");
	return false;
});

});