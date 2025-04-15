window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCBRL")
            .then(response => response.json())
            .then(data => {
                const preco = data.price;
                const elementoPreco = document.getElementById('preco-btc');
                if (elementoPreco) {
                    elementoPreco.textContent = `R$ ${Number(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                }
            })
            .catch(error => console.error("Erro ao buscar preço:", error));
    }, 1000);
});

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        fetch("https://api.binance.com/api/v3/avgPrice?symbol=ETHBRL")
            .then(response => response.json())
            .then(data => {
                const preco = data.price;
                const elementoPreco = document.getElementById('preco-eth');
                if (elementoPreco) {
                    elementoPreco.textContent = `R$ ${Number(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                }
            })
            .catch(error => console.error("Erro ao buscar preço:", error));
    }, 1000);
});

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        fetch("https://api.binance.com/api/v3/avgPrice?symbol=SOLBRL")
            .then(response => response.json())
            .then(data => {
                const preco = data.price;
                const elementoPreco = document.getElementById('preco-sol');
                if (elementoPreco) {
                    elementoPreco.textContent = `R$ ${Number(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                }
            })
            .catch(error => console.error("Erro ao buscar preço:", error));
    }, 1000);
});

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        fetch("https://api.binance.com/api/v3/avgPrice?symbol=DOGEBRL")
            .then(response => response.json())
            .then(data => {
                const preco = data.price;
                const elementoPreco = document.getElementById('preco-doge');
                if (elementoPreco) {
                    elementoPreco.textContent = `R$ ${Number(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                }
            })
            .catch(error => console.error("Erro ao buscar preço:", error));
    }, 1000);
});