function change()
{
    (document.getElementById('lamp').src == "/img/lampada_off.gif") ?
     document.getElementById('lamp').src = "/img/lampada_on.gif"
    : document.getElementById('lamp').src = "/img/lampada_off.gif";
    
}