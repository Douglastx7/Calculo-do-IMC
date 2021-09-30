
// ------------------------ botão1 calcular

 const button = document.querySelector('#button1');
 button.addEventListener('click', function(){ 

   
    //  SELECIONANDO OS INPUTS
    const peso = document.querySelector('#PESO');
    const valorPeso = peso.value;

    const altura = document.querySelector('#ALTURA');
    const valorAltura = altura.value;

    // -----------CALCULANDO OS INPUTS
    const ResultadoAltura = valorAltura * valorAltura;
    const PesoDivididoAltura = valorPeso / ResultadoAltura;
    const IMC = (PesoDivididoAltura).toFixed(1);



    // -----------VERIFICANDO SE OS INPUTS ESTÃO PREENCHIDO
    if(valorPeso == "" && valorAltura == "") { 
        alert('Preencha os campos !');
        forme2.peso.focus();
    } else  if(valorPeso == "") { 
        alert('Digite seu peso !');
        forme2.peso.focus();
    }else  if(valorAltura == "") { 
        alert('Digite sua altura !');
        forme1.altura.focus();
      };

       

      
        if(valorAltura === valorAltura && PesoDivididoAltura === PesoDivididoAltura) {


             const desativarButton = document.querySelector('.button2');
            desativarButton.classList.toggle('DesativarBUTTON');

            const card = document.querySelector("#card");
            card.classList.toggle("flip");

            const Pe = document.querySelector('.PE');
            Pe.innerHTML = valorPeso;

            const imc = document.querySelector('.IMC');
            imc.innerHTML = IMC;

              const Al = document.querySelector('.AL');
            Al.innerHTML = valorAltura;
         

           // ----------                     -VERIFICANDO OS CALCULOS
        if(PesoDivididoAltura < 18.5) { 
             

            const RN = document.querySelector('.resultado');
            RN.innerHTML = 'Abaixo do peso adequado';
            document.getElementById('Imagens').src="/img/baixo-peso.png";
            document.getElementById('AlterarCor').style.color="rgb(4, 122, 158)";
        
            } else if(PesoDivididoAltura >= 18.5 && PesoDivididoAltura < 25) { 

                const RP = document.querySelector('.resultado');
                RP.innerHTML = 'Peso adequado';
                document.getElementById('Imagens').src="/img/pesos-adequado.png";
                document.getElementById('AlterarCor').style.color="#6EC7CD";
           
            }else if(PesoDivididoAltura >= 25 && PesoDivididoAltura < 30) {
                const RN = document.querySelector('.resultado');
                RN.innerHTML = 'Acima do peso adequado';
                document.getElementById('Imagens').src="/img/sobre-peso.png";  
                document.getElementById('AlterarCor').style.color="#f98c51";

            }else if(PesoDivididoAltura >= 30) {
                const RN = document.querySelector('.resultado');
                RN.innerHTML = 'Obesidade';
                document.getElementById('Imagens').src="/img/obesidade.png";
                document.getElementById('AlterarCor').style.color="#CF4B58";
            };

        };
});



// ------------------------ botão 2 voltar

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){ 


    const desativarButton = document.querySelector('.button2');
    desativarButton.classList.toggle('DesativarBUTTON');

    const card = document.querySelector("#card");
    card.classList.toggle("flip");

});


