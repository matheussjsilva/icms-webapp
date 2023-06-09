/*
Tabela de Aliquotas 2020
ac 17
al 18
am 18
ba 18
ce 18
df 18
es 17
go 17
ma 18
mt 17
ms 17
mg 18
pa 17
pb 18
pr 18
pe 18
pi 18
rj 18
rn 18
rn 18
rs 18
ro 17.5
rr 17
sc 17
sp 18
se 18
to 18
*/

window.addEventListener('DOMContentLoaded', function () {

    const selecEstado = document.getElementById('estado');
    const inputValor = document.getElementById('valor');
    const btnCalcular = document.getElementById('btn-calc');
    let porcentagemICMS = 0;






    btnCalcular.addEventListener('click', function (event) {
        event.preventDefault();

        if (selecEstado.value === '') {
            alert('Por favor, selecione um estado.');
            return;
        }

        if (inputValor.value === '') {
            alert('Por favor, insira um valor');
            return;
        }


        switch (selecEstado.value) {
            case 'AC':
                porcentagemICMS = 17;
                break;
            case 'AL':
                porcentagemICMS = 18;
                break;
            case 'AP':
                porcentagemICMS = 18;
                break;
            case 'AM':
                porcentagemICMS = 18;
                break;
            case 'BA':
                porcentagemICMS = 18;
                break;
            case 'CE':
                porcentagemICMS = 18;

            case 'DF':
                porcentagemICMS = 18;
                break;
            case 'ES':
                porcentagemICMS = 17;
                break;
            case 'GO':
                porcentagemICMS = 17;
                break;
            case 'MA':
                porcentagemICMS = 18;
                break;
            case 'MT':
                porcentagemICMS = 17;
                break;
            case 'MS':
                porcentagemICMS = 17;
                break;
            case 'MG':
                porcentagemICMS = 18;
                break;
            case 'PA':
                porcentagemICMS = 17;
                break;
            case 'PB':
                porcentagemICMS = 18;
                break;
            case 'PR':
                porcentagemICMS = 18;
                break;
            case 'PE':
                porcentagemICMS = 18;
                break;
            case 'PI':
                porcentagemICMS = 18;
                break;
            case 'RJ':
                porcentagemICMS = 18;
                break;
            case 'RN':
                porcentagemICMS = 18;
                break;
            case 'RS':
                porcentagemICMS = 17.5;
                break;
            case 'RO':
                porcentagemICMS = 17;
                break;
            case 'RR':
                porcentagemICMS = 17;
                break;
            case 'SC':
                porcentagemICMS = 17;
                break;
            case 'SP':
                porcentagemICMS = 18;
                break;
            case 'SE':
                porcentagemICMS = 18;
                break;
            case 'TO':
                porcentagemICMS = 18;
                break;
        }

        const valorMercadoria = parseFloat(inputValor.value);
        const valorICMS = valorMercadoria + (valorMercadoria * porcentagemICMS / 100);

        const resPorcentagem = document.querySelector('.res p:nth-child(1)');
        const resValorMercadoria = document.querySelector('.res p:nth-child(2)');

        resPorcentagem.textContent = `Porcentagem do ICMS: ${porcentagemICMS}%`;
        resValorMercadoria.textContent = `Valor total da mercadoria: R$ ${valorICMS.toFixed(2)}`;



    })



})