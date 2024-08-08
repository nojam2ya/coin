import { getTickersOhlcvHistorical } from '@src/apis';
import { IOhlcvHistorical } from '@src/interfaces';
import { useQuery } from '@tanstack/react-query';

export const useCoinChartData = (coinId: string) => {
  const { data, isLoading } = useQuery<IOhlcvHistorical[]>({
    queryKey: ['ohlcv-historical', { coinId }],
    queryFn: () => getTickersOhlcvHistorical(coinId),
    refetchInterval: 10000,
  });

  return { chartData: data, chartDataLoading: isLoading };
};
