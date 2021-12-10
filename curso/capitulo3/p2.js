
    function verDias()
	{
		let dataRetirada = new Date(document.getElementById("data_retirada").value );
        
		let dataDevolucao = new Date(document.getElementById("data_devolucao").value );
        let dataResultado = dataDevolucao.getTime() - dataRetirada.getTime();
        
        let d = Math.ceil(dataResultado / (1000 * 3600 * 24));
        
		return d;
	}

	function calcularValor()
	{
        let nome = document.getElementById("nome").value
		let carros = [0, 119, 199, 299];
		let dias = verDias();
		let taxa = 0;
        let i = document.getElementById("tipo-carro").value
		let j = document.getElementById("cidade_retirada").value
		let k = document.getElementById("cidade_entrega").value
		
		if(dias > 0){
			if (carros[i] > 0){
				if (j !== k) {
					taxa = 300;
				}
    
			let total = (carros[i] * dias) + taxa;
            
			alert(`Senhor(a) ${nome}, seu aluguel foi confirmado! \n\n Valor total: \n  R$ ${total} ,00`);
			}
			else{
				alert("Entre com informações válidas!");
			}
		}
		else{
			alert("Entre com informações válidas!");
		}
	}
