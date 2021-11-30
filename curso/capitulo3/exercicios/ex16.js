function Validator()
{
	var email = prompt("Digite um E-Mail:")

	var arroba = email.split("@")

    //alert(arroba.length);

	var ponto = email.split(".")

    //alert(ponto.lenght);

 	arroba.length == 2 && ponto.length == 2 ?
	(
		alert("E-mail válido.")
    )
	:
	(
		alert("E-mail Inválido")
    )
	
}