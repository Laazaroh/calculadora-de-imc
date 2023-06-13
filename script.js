const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome && altura && peso !== '') {
        const valorIMC = (peso/(altura*altura)).toFixed(1);
        let classificacao = '';
        
        if(valorIMC <= 18){
            classificacao = `${nome} seu imc é ${valorIMC} e  Voce esta abixo do peso`
            
        }else if(valorIMC <= 25){
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta no peso ideal`;

        }else if(valorIMC <= 30){
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta acima do peso`;

        }else if(valorIMC <= 35){
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta com obesidade 1`;

        }else if(valorIMC <= 40){
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta com obesidade 2`;

        }else if(valorIMC <= 45){
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta com obesidade 3`;

        }else {
            classificacao = `${nome} seu imc é ${valorIMC} e Voce esta com obesidade morbida`;

        }
           
        resultado.textContent = classificacao;

    }else{
        resultado.textContent = 'preencha todos os campo';
    }
    
    
}
calcular.addEventListener('click', imc)