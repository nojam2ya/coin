import ApexChart from 'react-apexcharts';
import { lightTheme } from '@src/style/theme';
import dayjs from 'dayjs';
import { IOhlcvHistorical } from '@src/interfaces';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '@src/atoms';

const LineChart = ({ chartData }: { chartData: IOhlcvHistorical[] }) => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ApexChart
      type="line"
      series={[
        {
          name: 'close',
          data: chartData.map((price) => price.close),
        },
      ]}
      options={{
        chart: {
          height: 500,
          width: 500,
          toolbar: {
            show: false,
          },
          background: 'trnasparent',
        },
        grid: {
          show: false,
        },
        theme: {
          mode: isDark ? 'dark' : 'light',
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        yaxis: {
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
        fill: {
          type: 'gradient',
          gradient: { gradientToColors: ['blue'], stops: [0, 100] },
        },
        colors: [isDark ? 'lime' : lightTheme.bgColor],
        tooltip: {
          y: {
            formatter: (val) => `$${val.toFixed(2)}`,
          },
        },
      }}
    />
  );
};

export default LineChart;
