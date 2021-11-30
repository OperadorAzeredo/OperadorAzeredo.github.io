
function Comparison() {
    const n = prompt("Digite um numero")
    
    Alertar(n%2 === 0 ? "Par" : "Impar")

}

const Alertar = (message) => {
    alert(message)
}