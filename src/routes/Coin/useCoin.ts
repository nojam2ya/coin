import { getCoin, getTickers } from '@src/apis';
import { ICoinInfo, ITickers } from '@src/interfaces';
import { useQuery } from '@tanstack/react-query';
export const useCoin = (coinId: string) => {
  const { data: coin, isLoading: coinLoading } = useQuery<ICoinInfo>({
    queryKey: ['coin', { coinId }],
    queryFn: () => getCoin(coinId),
    enabled: !!coinId,
  });

  const { data: tickers, isLoading: tickersLoading } = useQuery<ITickers>({
    queryKey: ['tickers', { coinId }],
    queryFn: () => getTickers(coinId),
    enabled: !!coinId,
    refetchInterval: 5000,
  });

  return { coin, coinLoading, tickers, tickersLoading };
};
