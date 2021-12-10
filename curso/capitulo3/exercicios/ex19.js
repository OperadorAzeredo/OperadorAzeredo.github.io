
function inserir() {
    txt = document.getElementById("caixa_texto").value;
    list = document.getElementById("lista").innerHTML;
    list += "<li>"+txt+"</li>"
    document.getElementById("lista").innerHTML = list;
}
    