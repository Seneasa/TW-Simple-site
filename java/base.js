function openWindow(url, width, height)
{
	if ((width + 30 > screen.width) || (height + 60 > screen.height))
	{
	        width = width + 50;
                if (width > screen.width - 80)
			width = screen.width - 80;
	        height = height + 50;
		if (height > screen.height - 110)
			height = screen.height - 110;
		popupWin = window.open(url, "Image", "resizable,scrollbars,width=" + width + ",height=" + height + ",top=40,left=40,screenX=40,screenY=40");
	}
	else
	{
	        width = width + 18;
	        height = height + 26;
		popupWin = window.open(url, "Image", "resizable,width=" + width + ",height=" + height + ",top=40,left=40,screenX=40,screenY=40");
	}
}

function imageover(file)
{
	document.form1.img1.src = file;
}


function contents(file)
{
	self.location.replace(file);
}


function mHigh()
{
	event.srcElement.style.filter = "invert";
}

function mBack()
{
	event.srcElement.style.filter = "";
}
