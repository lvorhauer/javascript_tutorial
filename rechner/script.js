
/**
 * @type HTMLInputElement TextFeld
 */
var TextFeld = null;

window.onload = function(evt)
{
    TextFeld = document.getElementById("rechner_text");
}

function ButtonClick(evt)
{
    TextFeld.value = TextFeld.value + evt;
}