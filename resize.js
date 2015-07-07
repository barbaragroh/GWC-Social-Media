
$(window).resize(function resizes() {
     if($(window).width() == 800)// u can choose the size of the window also.
            $("whitebox").css("font-size","20px");
			$(".instapic").css("background-color", "#00FFFF");		
});
if($(window).width()==800){
	$("whitebox").css("font-size","20px");

}
if($(window).width()>800){
	$("whitebox").css("font-size","50px");

}
