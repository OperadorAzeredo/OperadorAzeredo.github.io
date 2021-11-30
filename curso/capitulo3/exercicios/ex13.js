
function Comparison()
{
	var comp = prompt("Digite uma palavra:")

	var pmoc = comp.split('').reverse().join('')

    const not = comp !== pmoc ? "NÃO " : ""
    alert(`A palavra ${not}é um palíndromo.`)


}
