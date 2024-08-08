import { isDarkAtom } from '@src/atoms';
import { IOhlcvHistorical } from '@src/interfaces';
import dayjs from 'dayjs';
import ReactApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';

const CandleChart = ({ chartData }: { chartData: IOhlcvHistorical[] }) => {
  const data = chartData.map((data) => ({
    x: new Date(data.time_close),
    y: [data.open, data.high, data.low, data.close],
  }));
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ReactApexChart
      options={{
        chart: {
          height: 500,
          width: 500,
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        xaxis: {
          type: 'datetime',
          labels: { show: false },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          categories: chartData.map((price) =>
            dayjs(price.time_close).format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
        yaxis: {
          show: false,
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: isDark ? '#3C90EB' : '#00B746',
              downward: isDark ? '#DF7D46' : '#EF403C',
            },
          },
        },
      }}
      series={[{ data }]}
      type="candlestick"
    />
  );
};

export default CandleChart;
