
function Comparison()
{
    const dateIn = prompt("Insira uma data:")
    const tp = new Date( Date.now() - new Date(dateIn) )
    
    const days = tp.getDate()
    const months = tp.getMonth()
    const years = tp.getFullYear() - 1970

    alert(`${years} anos, ${months} meses, ${days} dias.`)
}