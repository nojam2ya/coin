import axios from 'axios';
import dayjs from 'dayjs';

export const getCoins = async () =>
  axios.get('https://api.coinpaprika.com/v1/coins').then((res) => res.data);

export const getCoin = async (coinId: string) =>
  await axios
    .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    .then((res) => res.data);

export const getTickers = async (coinId: string) =>
  await axios
    .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    .then((res) => res.data);

export const getTickersOhlcvHistorical = async (coinId: string) =>
  await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`, {
      params: {
        start: dayjs().add(-1, 'week').format('YYYY-MM-DD'),
        end: dayjs().format('YYYY-MM-DD'),
      },
    })
    .then((res) => res.data);
