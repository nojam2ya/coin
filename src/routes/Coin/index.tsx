import Container from '@components/Container';
import { Helmet } from 'react-helmet-async';
import Header from '@components/Header';
import Title from '@components/Title';
import HomeBtn from '@components/HomeBtn';
import Loader from '@components/Loader';
import { BoxInfo, BoxTab, TabMenu, Wrap } from './style';
import { useCoin } from '@routes/Coin/useCoin';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

interface CoinRouteState {
  name: string;
}

const Coin = () => {
  const { state } = useLocation();
  const { name } = (state as CoinRouteState) ?? {};

  const { coinId } = useParams();
  const { coin, coinLoading, tickers, tickersLoading } = useCoin(coinId!);

  const title = name ? name : coinLoading ? 'Loading...' : coin?.name;

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>{title}</Title>
        <HomeBtn />
      </Header>
      {coinLoading || tickersLoading ? (
        <Loader />
      ) : (
        <Wrap>
          <BoxInfo>
            <ul className="info">
              <li>
                <span className="tit">RANK</span>
                <span className="con">{coin?.rank}</span>
              </li>
              <li>
                <span className="tit">SYMBOL</span>
                <span className="con">{coin?.symbol}</span>
              </li>
              {/* <li>
                <span className="tit">OPEN SOURCE</span>
                <span className="con">{coin?.open_source ? 'Yes' : 'No'}</span>
              </li> */}
              <li>
                <span className="tit">Price</span>
                <span className="con">
                  {tickers?.quotes.USD.price.toFixed(3)}
                </span>
              </li>
            </ul>
            <p className="description">{coin?.description}</p>
            <ul className="tickers">
              <li>
                <span className="tit">TOTAL SUPLY</span>
                <span className="con">{tickers?.total_supply}</span>
              </li>
              <li>
                <span className="tit">MAX SUPPLY</span>
                <span className="con">{tickers?.max_supply}</span>
              </li>
            </ul>
          </BoxInfo>
          <BoxTab>
            <TabMenu>
              <li>
                <NavLink
                  to="tickers"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? 'active' : ''
                  }
                >
                  TICKERS
                </NavLink>
              </li>
              <li>
                <NavLink to="chart">CHART</NavLink>
              </li>
            </TabMenu>
            <div className="content">
              <Outlet context={{ coinId, coin, tickers, tickersLoading }} />
            </div>
          </BoxTab>
        </Wrap>
      )}
    </Container>
  );
};

export default Coin;
