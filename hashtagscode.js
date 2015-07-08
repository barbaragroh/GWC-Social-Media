$(document).ready(function () {

	if($(window).width() <= 800){// u can choose the size of the window also.
        $("#btgciframe").attr("src","http://widget.websta.me/in/tag:breaktheglassceiling/?s=100&w=2&h=5&b=0&p=10");
		$("#gbtiframe").attr("src","http://widget.websta.me/in/tag:girlsbuiltthis/?s=100&w=2&h=5&b=0&p=10");
		$("#girlswciframe").attr("src","http://widget.websta.me/in/tag:girlswhocode/?s=100&w=2&h=5&b=0&p=10");
		$("#ctggiframe").attr("src","http://widget.websta.me/in/tag:closethegendergap/?s=100&w=2&h=5&b=0&p=10");
		$("#gwciframe").attr("src","http://widget.websta.me/in/tag:gwc/?s=100&w=2&h=5&b=0&p=10");
		$("#gwcciframe").attr("src","http://widget.websta.me/in/tag:gwcclubs/?s=100&w=2&h=5&b=0&p=10");
		$("#gciframe").attr("src","http://widget.websta.me/in/tag:girlscan/?s=100&w=2&h=5&b=0&p=10");
		$("#ciframe").attr("src","http://widget.websta.me/in/tag:coding/?s=100&w=2&h=5&b=0&p=10");
		$("#gitiframe").attr("src","http://widget.websta.me/in/tag:girlsintech/?s=100&w=2&h=5&b=0&p=10");
		$(".embed-responsive-item").css("height","550px");
		$(".embed-responsive-item").css("width","250px");
	}
});
$(window).resize(function() {
     if($(window).width() <= 800){// u can choose the size of the window also.
        $("#btgciframe").attr("src","http://widget.websta.me/in/tag:breaktheglassceiling/?s=100&w=2&h=5&b=0&p=10");
		$("#gbtiframe").attr("src","http://widget.websta.me/in/tag:girlsbuiltthis/?s=100&w=2&h=5&b=0&p=10");
		$("#girlswciframe").attr("src","http://widget.websta.me/in/tag:girlswhocode/?s=100&w=2&h=5&b=0&p=10");
		$("#ctggiframe").attr("src","http://widget.websta.me/in/tag:closethegendergap/?s=100&w=2&h=5&b=0&p=10");
		$("#gwciframe").attr("src","http://widget.websta.me/in/tag:gwc/?s=100&w=2&h=5&b=0&p=10");
		$("#gwcciframe").attr("src","http://widget.websta.me/in/tag:gwcclubs/?s=100&w=2&h=5&b=0&p=10");
		$("#gciframe").attr("src","http://widget.websta.me/in/tag:girlscan/?s=100&w=2&h=5&b=0&p=10");
		$("#ciframe").attr("src","http://widget.websta.me/in/tag:coding/?s=100&w=2&h=5&b=0&p=10");
		$("#gitiframe").attr("src","http://widget.websta.me/in/tag:girlsintech/?s=100&w=2&h=5&b=0&p=10");
		$(".embed-responsive-item").css("height","550px");
		$(".embed-responsive-item").css("width","250px");
	}
	if($(window).width() > 800){// u can choose the size of the window also.
        $("#btgciframe").attr("src","http://widget.websta.me/in/tag:breaktheglassceiling/?s=200&w=7&h=10&b=0&p=10");
		$("#gbtiframe").attr("src","http://widget.websta.me/in/tag:girlsbuiltthis/?s=200&w=7&h=10&b=0&p=10");
		$("#girlswciframe").attr("src","http://widget.websta.me/in/tag:girlswhocode/?s=200&w=7&h=10&b=0&p=10");
		$("#ctggiframe").attr("src","http://widget.websta.me/in/tag:closethegendergap/?s=200&w=7&h=10&b=0&p=10");
		$("#gwciframe").attr("src","http://widget.websta.me/in/tag:gwc/?s=200&w=7&h=10&b=0&p=10");
		$("#gwcciframe").attr("src","http://widget.websta.me/in/tag:gwcclubs/?s=200&w=7&h=10&b=0&p=10");
		$("#gciframe").attr("src","http://widget.websta.me/in/tag:girlscan/?s=200&w=7&h=10&b=0&p=10");
		$("#ciframe").attr("src","http://widget.websta.me/in/tag:coding/?s=200&w=7&h=10&b=0&p=10");
		$("#gitiframe").attr("src","http://widget.websta.me/in/tag:girlsintech/?s=200&w=7&h=10&b=0&p=10");
		$(".embed-responsive-item").css("height","2100px");
		$(".embed-responsive-item").css("width","2100px");
	}
	
});
$(document).ready(function(){
        //Make sure the iframe is done loading before you attach an event
        $(".embed-responsive-item").load(function(){
            // Get the body element
            var frameBody = $(".embed-responsive-item").contents().find("body");

            // Get all links inside the BODY tag
            $('a', frameBody).click(function(e){
                    //Disable all default actions       
                    e.preventDefault();
            });
        });
    });