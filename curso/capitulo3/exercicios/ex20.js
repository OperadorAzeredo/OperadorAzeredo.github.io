function hide(id1,id2)
{
    (document.getElementById(id1).style.display == '') ? document.getElementById(id1).style.display = 'none'
    : document.getElementById(id1).style.display = '';
    
    (document.getElementById(id2).textContent == "Ocultar Conteúdo") ? document.getElementById(id2).textContent = "Mostrar Conteúdo"
    : document.getElementById(id2).textContent = "Ocultar Conteúdo";
}