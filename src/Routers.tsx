import Coin from '@routes/Coin';
import Coins from '@routes/Coins';
import Chart from '@src/routes/Coin/Chart';
import Tickers from '@src/routes/Coin/Tickers';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${import.meta.env.VITE_PUBLIC_URL}/`}
          element={<Coins />}
        />
        <Route
          path={`${import.meta.env.VITE_PUBLIC_URL}/:coinId`}
          element={<Coin />}
        >
          <Route index element={<Navigate to="tickers" replace={true} />} />
          <Route path="tickers" element={<Tickers />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
