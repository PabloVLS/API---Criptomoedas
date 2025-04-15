import axios from 'axios';
import Candle from './candle';

export async function getCandles(symbol = '', interval = ''){

    const response = await axios.get(`http://localhost:3001/klines?symbol=${symbol.toUpperCase()}&interval=${interval}`);
    const candles = response.data.map(k => {
        return new Candle(k[0], k[1], k[2], k[3], k[4]);
    })

    return candles;

}