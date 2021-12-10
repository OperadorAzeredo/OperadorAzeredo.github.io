function Validator()
{
	var email = prompt("Digite um E-Mail:")

	var arroba = email.split("@")

    

	var ponto = email.split(".")

    

 	arroba.length == 2 && ponto.length == 2 ?
	(
		alert("E-mail válido.")
    )
	:
	(
		alert("E-mail Inválido")
    )
	
}