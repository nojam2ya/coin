import { ICoinInfo, ITickers } from '@src/interfaces';
import { Title, WrapList } from './style';
import { useOutletContext } from 'react-router-dom';
import TickerCon from '@src/routes/Coin/Tickers/TickerCon';

const Tickers = () => {
  const { tickers } = useOutletContext<{
    coin: ICoinInfo;
    tickers: ITickers;
  }>();

  return (
    <>
      <WrapList>
        <li>
          <Title>1시간 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_1h < 0}
            value={tickers.quotes.USD.percent_change_1h}
          />
        </li>
        <li>
          <Title>12시간 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_12h < 0}
            value={tickers.quotes.USD.percent_change_12h}
          />
        </li>
        <li>
          <Title>24시간 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_24h < 0}
            value={tickers.quotes.USD.percent_change_24h}
          />
        </li>
      </WrapList>
      <WrapList>
        <li>
          <Title>7일 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_7d < 0}
            value={tickers.quotes.USD.percent_change_7d}
          />
        </li>
        <li>
          <Title>30일 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_30d < 0}
            value={tickers.quotes.USD.percent_change_30d}
          />
        </li>
        <li>
          <Title>1년 변동률</Title>
          <TickerCon
            isMinus={tickers.quotes.USD.percent_change_1y < 0}
            value={tickers.quotes.USD.percent_change_1y}
          />
        </li>
      </WrapList>
    </>
  );
};

export default Tickers;
