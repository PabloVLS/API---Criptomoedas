

function selecionarMoeda(moeda){
    localStorage.setItem('moedaSelecionada', moeda);

    if(moeda === 'btcbrl') window.location.href = 'bitcoin.html';
    if(moeda === 'DOGEBRL') window.location.href = 'doge.html';
    if(moeda === 'ETHBRL') window.location.href = 'ethereum.html';
    if(moeda === 'SOLBRL') window.location.href = 'solana.html';

}