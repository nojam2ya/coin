import { getCoins } from '@src/apis';
import { useQuery } from '@tanstack/react-query';

interface ICoin {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

export const useCoins = () => {
  const { data, isLoading } = useQuery<ICoin[]>({
    queryKey: ['coins'],
    queryFn: () => getCoins(),
  });

  return { coins: data ? data.slice(0, 100) : [], coinsLoading: isLoading };
};
