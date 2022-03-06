var color;


//sets the colorpicket to the initial color
function initClrpkr()
	{
	document.getElementById('clrpkr').addEventListener("dblclick", function(event){if(event.originalTarget.className.indexOf("colorpickertile") < 0) {return;}; setTextClr(); sendClr(1); document.documentElement.acceptDialog()}, false);
	document.getElementById('clrpkr').addEventListener("click", function(){setTextClr(); sendClr(1);}, false);

	document.getElementById("clrvalue").value = window.arguments[0].inn.oldColor;
	try {
		document.getElementById('clrpkr').color = window.arguments[0].inn.oldColor;
		}
	catch(e) {
		//sometimes we land here since the color isn't available in the limited colorpicker element
		}
	}
	
//sets the input box to the selected color
function setTextClr()
	{
	color = document.getElementById("clrpkr").color;
	document.getElementById("clrvalue").value = color;	
	window.arguments[0].inn.oldColor = color;
	}
//sets the color in the colorpicker
function setClrPicker()
	{
	var txt = document.getElementById("clrvalue").value;
	document.getElementById("clrpkr").color = txt;
	window.arguments[0].inn.oldColor = txt;
	//setText();
	}
//returns the selected color on dialog accept or old color on cancel
function sendClr(st)
	{
	window.arguments[0].inn.enabled=st;
	window.arguments[0].out = {oldColor:window.arguments[0].inn.oldColor, enabled:window.arguments[0].inn.enabled };
	return true;
	}