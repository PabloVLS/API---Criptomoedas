import { useEffect, useState } from 'react';
import Chart from './chart';
import { getCandles } from './dataService';
import useWebSocket from 'react-use-websocket';
import candle from './candle';

function App() {
  
  const [data, setData] = useState([]);
  const [moeda, setMoeda] = useState('');

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const moedaSelecionada = urlParams.get('moeda');

    setMoeda(moedaSelecionada);

    getCandles(moedaSelecionada, '1m')
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message));
  }, []);

  const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/${moeda.toLowerCase()}@kline_${'1m'}`,{
    onOpen: () => console.log('Connected to Binance'),
    onError: (err) => console.log(err),
    shouldReconnect: () =>true,
    reconnectInterval: 3000,
    onMessage: () => {
      if(lastJsonMessage){
        const newCandle = new candle(lastJsonMessage.k.t, lastJsonMessage.k.o, lastJsonMessage.k.h, lastJsonMessage.k.l, lastJsonMessage.k.c);
        const newData = [...data];

        if(lastJsonMessage.k.x === false){
          newData[newData.length - 1] = newCandle;
        }else{
          newData.splice(0,1);
          newData.push(newCandle);
        }
        setData(newData);
      }
    }
  })

  return (
    <div>
      <h2>Gráfico: {moeda}</h2>
      <Chart data={data} />
    </div>
  );
}

export default App;