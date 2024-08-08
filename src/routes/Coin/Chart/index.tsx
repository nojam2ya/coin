import { useCoinChartData } from '@src/routes/Coin/Chart/useCoinChartData';
import { useOutletContext } from 'react-router-dom';
import LineChart from '@src/routes/Coin/Chart/LineChart';
import CandleChart from '@src/routes/Coin/Chart/CandleChart';

const Chart = () => {
  const { coinId } = useOutletContext<{ coinId: string }>();
  const { chartData = [], chartDataLoading } = useCoinChartData(coinId);

  return (
    <>
      {chartDataLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <LineChart chartData={chartData} />
          <CandleChart chartData={chartData} />
        </>
      )}
    </>
  );
};

export default Chart;
