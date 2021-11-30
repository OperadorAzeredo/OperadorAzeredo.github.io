function Fact()
{
    var fatorial = prompt("Digite um numero ")
    var multipicador = fatorial - 1
    for (var i = multipicador; i > 1; i--) 
        {
            fatorial *= i
        }
    alert("Resultado: "+fatorial)
}