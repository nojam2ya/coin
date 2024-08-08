import { isDarkAtom } from '@src/atoms';
import { Content } from '@src/routes/Coin/Tickers/style';
import { useRecoilValue } from 'recoil';

const TickerCon = ({ isMinus, value }: { isMinus: boolean; value: number }) => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <Content isMinus={isMinus} isDark={isDark}>
      {value}
    </Content>
  );
};

export default TickerCon;
