import { Wrap } from '@src/components/Title/style';
import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Wrap>
      <>{children}</>
    </Wrap>
  );
};

export default Title;
