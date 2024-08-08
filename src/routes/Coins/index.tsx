import Title from '@components/Title';
import Container from '@components/Container';
import Header from '@components/Header';
import { Coin, CoinsList } from './style';
import { useCoins } from '@routes/Coins/useCoins';
import { Link } from 'react-router-dom';
import Loader from '@src/components/Loader';
import { Helmet } from 'react-helmet-async';

const Coins = () => {
  const { coins, coinsLoading } = useCoins();

  const title = 'COINS';

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>{title}</Title>
      </Header>

      {coinsLoading ? (
        <Loader />
      ) : (
        <CoinsList>
          {coins &&
            coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <img
                    src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                    alt=""
                  />
                  <span className="text">{coin.name}</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </Coin>
            ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
